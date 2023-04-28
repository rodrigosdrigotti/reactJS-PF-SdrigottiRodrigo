import React, { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { getProductsById } from '../../asyncMock';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null)

    const { detalleId } = useParams();

    useEffect(() => {
      getProductsById(detalleId)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [detalleId])
      
    return (
        <ItemDetail {...products} />
    )
}
