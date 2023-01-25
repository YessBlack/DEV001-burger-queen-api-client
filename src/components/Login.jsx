import { Button } from "./Button"
import { Header } from "./Header"

export function Login({ img }) {
  return(
      <section className="principal-login-container">
        <div className="login-container-form">
          <h1 className="title-login">INICIAR SESION</h1>
          <img src={`../public/images/${img}.jfif`} alt="" className="img-login" />
          <form className="form-login">
            <input type="text" placeholder="Usuario" className="form-longin-input"/>
            <input type="password" placeholder="Contraseña" className="form-longin-input" />
            <button className="btn-login">Ingresar</button>
          </form>
        </div>
      </section>
  )
}