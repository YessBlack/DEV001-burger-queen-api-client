import { useEffect, useState } from 'react'

export const EmployeeList = () => {
  const [db, setDb] = useState([])

  useEffect(() => {
    const petition = async () => {
      const data = await fetch('http://localhost:3004/users')
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
              <th className='col' scope='col'>e-mail</th>
              <th className='col' scope='col'>Rol</th>
              <th className='col' scope='col'>Eliminar</th>
              <th className='col' scope='col'>Editar</th>
            </tr>
          </thead>
          <tbody>
            {
                    db.map((worker) => {
                      return (
                        <tr key={worker.id}>
                          <th scope='row'>{worker.id}</th>
                          <td className='celdas'>Trabajadores</td>
                          <td className='celdas'>{worker.email}</td>
                          <td className='celdas'>{
                          worker.roles.admin
                            ? 'Admin'
                            : worker.roles.chef
                              ? 'Chef'
                              : 'Mesero'
}
                          </td>
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
