import { useContext, useEffect, useRef, useState } from 'react'
import swal from 'sweetalert'
import { ModalProducts } from './ModalProducts'
import ProductContext from './DataContext'

export const ProductList = () => {
  const [db, setDb] = useState([])
  const [borrar, setBorrar] = useState(false)
  const { edit, setEdit } = useContext(ProductContext)
  const productSelect = useRef({})

  useEffect(() => {
    const petition = async () => {
      const data = await fetch('http://localhost:3000/products')
      const res = await data.json()
      setDb(res)
    }
    petition()
  }, [borrar])

  const handleEdit = (product) => {
    productSelect.current = product
    setEdit(!edit)
  }

  console.log(productSelect)
  const handleDelete = (id) => {
    swal({
      title: 'Estás seguro de eliminar este usuario?',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    })
      .then((willDelete) => {
        if (willDelete) {
          const option = {
            method: 'DELETE',
            body: JSON.stringify(db),
            headers: { 'content-type': 'application/json' }
          }

          fetch(`http://localhost:3000/products/${id}`, option)

          setBorrar(!borrar)
          swal('Usuario eliminado', {
            icon: 'success'
          })
        } else {
          swal('Usuario no eliminado')
        }
      })
  }

  return (
    <>
      <article className='container-employee'>
        <div className='container-employee-list'>
          <table className='table'>
            <thead>
              <tr>
                <th className='col' scope='col'>ID</th>
                <th className='col' scope='col'>Nombre</th>
                <th className='col' scope='col'>Precio</th>
                <th className='col' scope='col'>Tipo</th>
                <th className='col' scope='col'>Fecha</th>
                <th className='col' scope='col'>Eliminar</th>
                <th className='col' scope='col'>Editar</th>
              </tr>
            </thead>
            <tbody>
              {
                    db.map((product) => {
                      return (
                        <tr key={product.id}>
                          <th scope='row'>{product.id}</th>
                          <td className='celdas'>{product.name}</td>
                          <td className='celdas'>{product.price}</td>
                          <td className='celdas'>{
                         product.type === 'breakfast'
                           ? 'Desayuno'
                           : 'Almuerzo/Cena'
}
                          </td>
                          <td className='celdas'>{product.dataEntry}</td>
                          <td className='celdas'>
                            <button type='button' className='btn btn-outline-danger' onClick={() => handleDelete(product.id)}>Eliminar</button>
                          </td>
                          <td className='celdas'>
                            <button type='button' className='btn btn-outline-info' data-bs-toggle='modal' data-bs-target='#staticBackdrop' onClick={() => handleEdit(product)}>
                              Editar
                            </button>
                          </td>
                        </tr>
                      )
                    })
                }

            </tbody>
          </table>
        </div>
      </article>
      <ModalProducts name={productSelect.current.name} price={productSelect.current.price} /> : <ModalProducts />
    </>

  )
}
