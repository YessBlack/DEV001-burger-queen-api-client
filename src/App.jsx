import './App.css'
import { Products } from './assets/components/Products'

function App() {
  return (
    <section className='bq-containerCard'>
      <Products
        img='https://img.freepik.com/fotos-premium/cafe-americano-clasico-leche-sobre-fondo-gris_112304-1304.jpg'
        product='Cafe americano'
        price='$5 USD'
      />
    </section>
  )
}

export default App
