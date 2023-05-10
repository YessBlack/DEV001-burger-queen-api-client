import { useProduct } from '../../hooks/useProduct'
import { Product } from './Product'

export function ListProducts ({ isBreackFast }) {
  const { state } = useProduct()

  return (
    <section className='overflow-y-scroll h-[600px]'>
      {
            isBreackFast
              ? state.breakfast.map(e => {
                return (
                  <Product
                    key={e.id}
                    id={e.id}
                    img={e.img}
                    productName={e.name}
                    cost={e.price}
                  />
                )
              })

              : state.lunch.map(e => {
                return (
                  <Product
                    key={e.id}
                    id={e.id}
                    img={e.img}
                    productName={e.name}
                    cost={e.price}
                  />
                )
              })
}
    </section>
  )
}
