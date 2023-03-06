import { useEffect, useState } from 'react'

export const ProductList = () => {
  const [db, setDb] = useState([])

  useEffect(() => {
    const petition = async () => {
      const data = await fetch('http://localhost:3000/products')
      const res = await data.json()
      setDb(res)
    }
    petition()
  }, [])
  console.log(db)
  return (
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
                            <button type='button' className='btn btn-outline-danger'>Eliminar</button>
                          </td>
                          <td className='celdas'>
                            <button type='button' className='btn btn-outline-info'>Editar</button>
                          </td>
                        </tr>
                      )
                    })
                }

          </tbody>
        </table>
      </div>
    </article>
  )
}
