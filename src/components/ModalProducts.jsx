import { useContext, useEffect, useState } from 'react'
import ProductContext from './DataContext'

export function ModalProducts ({ id, name, price }) {
  const [inputName, setInputName] = useState('')
  const [inputCost, setInputCost] = useState('')

  const { edit } = useContext(ProductContext)

  useEffect(() => {
    setInputName(name)
    setInputCost(price)
  }, [edit])

  const handleName = (e) => {
    setInputName(e.target.value)
  }
  const handleCost = (e) => {
    setInputCost(e.target.value)
  }

  console.log(name)
  return (

    <div className='modal fade' id='staticBackdrop' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='staticBackdropLabel'>Modal title</h1>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
          </div>
          <div className='modal-body'>
            <div className='mb-3'>
              <label htmlFor='formGroupExampleInput' className='form-label'>Nombre Producto</label>
              <input type='text' className='form-control' id='formGroupExampleInput' placeholder='Nombre Producto' onChange={handleName} value={inputName} />
            </div>
            <div className='mb-3'>
              <label htmlFor='formGroupExampleInput2' className='form-label'>Precio</label>
              <input type='text' className='form-control' id='formGroupExampleInput2' placeholder='Precio' onChange={handleCost} value={inputCost} />
            </div>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Cerrar</button>
            <button type='button' className='btn btn-primary'>Guardar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
