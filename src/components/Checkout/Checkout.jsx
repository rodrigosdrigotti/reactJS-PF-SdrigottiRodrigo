import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext";
import { CheckoutForm } from "../CheckoutForm/CheckoutForm";
import { Timestamp, collection, documentId, getDocs, where, query, writeBatch, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { Modal } from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const Checkout = () => {
    
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [error, setError] = useState(false);
    const { cart, clearCart, totalPrice } = useContext(CartContext);
    const { currentUser } = useContext(AuthContext);

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
            const productsAddedFromFirestone = await getDocs(query(collection(db, 'items'), where(documentId(), 'in', ids)))
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
        return (
            <div className="checkoutOrder">
                <h3>{currentUser.email}</h3>
                <h2>Gracias por su compra!!!</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-bag-heart-fill" viewBox="0 0 16 16">
                    <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                </svg>
                <h1>EL NUMERO DE SU ORDEN ES: {orderId}</h1>
            </div>
        )
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