import { useState, useEffect } from 'react'
import { useProduct } from '../hooks/useProduct'
import { ListProducts } from './ListProducts'
import { TotalCheck } from './TotalCheck'

function Menu ({ useNavigate }) {
  const { getProducts } = useProduct()

  const [isBreackFast, setIsBreackFast] = useState(true)

  // change view
  const handleClickBreakFast = () => {
    setIsBreackFast(true)
  }

  const handleClickLunchDinner = () => {
    setIsBreackFast(false)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <section className='bg-[#FFD66C]'>
        <div className='grid grid-cols-2-menu gap-1 max-w-[1024px] m-auto bg-button-secondary-color'>
          <button
            className='w-[80%] bg-button-primary-color p-[20px] text-2xl font-bold cursor-pointer border-0 hover:scale-110 transition duration-200' onClick={handleClickBreakFast}
          > Desayuno
          </button>
          <button
            className='w-[70%] bg-button-secondary-color p-[20px] text-2xl font-bold cursor-pointer border-0 hover:scale-110 transition duration-200'
            onClick={handleClickLunchDinner}
          >
            Almuerzo/Cena
          </button>
        </div>
      </section>

      <div className='grid grid-cols-2-menu gap-1 max-w-[1024px] m-auto'>
        <ListProducts isBreackFast={isBreackFast} />
        <TotalCheck />
      </div>
    </>
  )
}
export default Menu
