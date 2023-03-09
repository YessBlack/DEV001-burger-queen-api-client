import { useEffect, useState } from 'react'
import swal from 'sweetalert'

export const EmployeeList = () => {
  const [db, setDb] = useState([])
  const [borrar, setBorrar] = useState(false)

  useEffect(() => {
    const petition = async () => {
      const data = await fetch('http://localhost:3004/users')
      const res = await data.json()
      setDb(res)
    }
    petition()
  }, [borrar])

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
          fetch(`http://localhost:3004/users/${id}`, option)
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
                            <button type='button' className='btn btn-outline-danger' onClick={() => handleDelete(worker.id)}>Eliminar</button>
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
