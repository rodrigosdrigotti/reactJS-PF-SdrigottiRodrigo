import { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

export function ItemListContainer({ greeting }) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsDB = categoryId
                        ? query(collection(db, 'items'), where('category', '==', categoryId))
                        : collection(db, 'items')

    getDocs(productsDB)
    .then(products => {
      const productsAdapted = products.docs.map(doc => {
        const data = doc.data();
        return { id: doc.id, ...data };
      })
      setProducts(productsAdapted);
    })
    .catch(error => {
      console.log(error);
    })
    .finally( () => {
      setLoading(false);
    })
  }, [categoryId])

  return (
    <section>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="greeting">
        <h1>{ greeting }</h1>
        <h2>{ categoryId }</h2>
        <ItemList products={products}/>
      </div> )}
    </section>
  )
}
