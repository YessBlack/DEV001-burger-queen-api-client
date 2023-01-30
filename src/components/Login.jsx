import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
// const initialForm = {
//   email:'',
//   password:''
// } 
 // const [form, setForm] = useState(initialForm);

  // const inputChange = (e) => {
  //   setForm({
  //     ...form, [e.target.name]: e.target.value
  //   })
  // }
export function Login({ img}) {
const {register, handleSubmit, formState:{errors}} = useForm();
const navigate = useNavigate();

 const onSubmit = (data ,e) => {

  e.target.reset()
  
  const options = {
    method : "POST",
    body:JSON.stringify(data),
    headers: { 'content-type': 'application/json' }
  }
       fetch('http://localhost:3004/login', options)
      .then(res => res.ok ? res.json() : Promise.reject({err:true}))
      .then((res) =>{
        if(!res.err) {
          const roles = res.user.roles
          if (roles.admin) {
            navigate('/admin')
          } else if (roles.mesero) {
            navigate('/menu')
          } else if (roles.chef) {
            navigate('/cocina')
          }
        } else {
          alert('Error')
        }
      })
    }

    return(
        <section className="principal-login-container">
          <div className="login-container-form">
            <h1 className="title-login">INICIAR SESION</h1>
            <img src={`../public/images/${img}.jfif`} alt="" className="img-login" />
            <form className='form-login' onSubmit={handleSubmit(onSubmit)}>
              <input type="text" placeholder="Usuario" className="form-longin-input"
               name = 'email'
              {...register('email',{
                required:{value:true, message:"Este campo es obligatorio"}
              })}
             />
               <span className="text-danger">{errors?.email?.message}</span>
              <input type="password" placeholder="Contraseña" className="form-longin-input"
               name = 'password'
               {...register('password',{
                required:{value:true, message:"Este campo es obligatorio"},
                minLength:{value:6, message:'La contraseña debe tener minimo 6 caracteres'}
               })}
               />
               <span className="text-danger">{errors.password?.message}</span>
             <button className="btn-login" >Ingresar</button>
            </form>
          </div>
        </section>
    )
  }