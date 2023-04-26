import { ItemCount } from '../ItemCount/ItemCount';

export function ItemListContainer({ greeting }) {

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades.`);
  }

  return (
    <section>
      <div className="greeting">
        <h1>{ greeting }</h1>
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
      </div>
    </section>
  )
}
