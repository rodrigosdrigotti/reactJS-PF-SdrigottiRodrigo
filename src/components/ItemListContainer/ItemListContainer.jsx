import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;
    
    asyncFunc(categoryId)
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.error(error);
      })
  }, [categoryId])

  
  return (
    <section>
      <div className="greeting">
        <h1>{ greeting }</h1>
        <h2>{ categoryId }</h2>
        <ItemList products={products}/>
      </div>
    </section>
  )
}
