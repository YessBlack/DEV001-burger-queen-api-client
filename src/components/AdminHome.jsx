import { EmployeeList } from './EmployeeList'
import { ProductList } from './ProductsList'
import { useState } from 'react'

export const AdminHome = () => {
  const [showEmployee, setShowEmployee] = useState(true)

  const handleEmploye = () => {
    setShowEmployee(true)
  }
  const handleProducts = () => {
    setShowEmployee(false)
  }
  const textButton = showEmployee ? 'Agregar Empleado' : 'Agregar Producto'

  return (
    <section className='container-admin'>
      <div className='admin-button'>
        <button className='button-employee' onClick={handleEmploye}> Empleados</button>
        <button className='button-products' onClick={handleProducts}> Productos</button>
      </div>
      <div className='button-add'>
        <button type='button' className='btn btn-success'>{textButton}</button>
        {showEmployee ? <EmployeeList /> : <ProductList />}
      </div>
    </section>
  )
}
