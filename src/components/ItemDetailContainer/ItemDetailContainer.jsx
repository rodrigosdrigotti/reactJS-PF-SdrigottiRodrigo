import React, { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

export const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);

    const { detalleId } = useParams();

    useEffect(() => {
      setLoading(true);

      const itemDB = doc(db, 'items', detalleId);

      getDoc(itemDB)
      .then(response => {
        const data = response.data();
        const productsAdapted = { id: response.id, ...data }
        setProducts(productsAdapted)
      })
      .catch(error => {
        console.log(error)
      })
      .finally( () => {
        setLoading(false);
      })
    }, [detalleId])
    
    return (
      loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) :
      <ItemDetail {...products} />
      )
    }
    
      