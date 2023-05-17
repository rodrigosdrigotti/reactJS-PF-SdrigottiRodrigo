import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext";
import { CheckoutForm } from "../CheckoutForm/CheckoutForm";
import { Timestamp, collection, documentId, getDocs, where, query, writeBatch, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { Modal } from "../Modal/Modal";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
    
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [error, setError] = useState(false);
    const { cart, clearCart, totalPrice } = useContext(CartContext);

    const navigate = useNavigate();
    
    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: totalPrice(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(prod => prod.id);
            //const productsRef = collection(db, 'items');
            const productsAddedFromFirestone = await getDocs(query(collection(db, 'items'), where(documentId(), 'in', ids)))
            //const productsAddedFromFirestone = await getDocs(query(productsRef), where(documentId(),'in', ids))
            const { docs } = productsAddedFromFirestone;

            docs.forEach((doc) => {
                const dataDoc = doc.data();
                const stockDB = dataDoc.stock;
                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;
                
                if(stockDB >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDB - prodQuantity});
                }
                else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit();
                
                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id);
                clearCart();
            }
            else {
                setError(true);
            }
        
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>SE ESTÁ GENERANDO SU ORDEN...</h1>
    }
    if(orderId) {
        return <h1>EL NUMERO DE SU ORDEN ES: {orderId}</h1>
    }

    return (
        <>
        {
            error
            ?
            <Modal cerrarVentana={() => navigate(-1)}>
                <div className='contenido'>
                    <h1>Hay productos que estan fuera de stock</h1>
                    <div className='detail-btn'>
                        <button className='btn-opcion' onClick={() => navigate(-1)}>Volver</button>
                    </div>
                </div>
            </Modal>
            :
            <div>
                <h1>Checkout</h1>
                <CheckoutForm onConfirm={createOrder}/>
            </div>
        }
        </>
    )
}