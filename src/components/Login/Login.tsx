import './Login.scss'
import { Link } from 'react-router-dom';
import { AiFillGoogleCircle, AiFillLock, AiOutlineMail } from 'react-icons/ai';

const Login = () => {
  return (
    <main className="login">
        <div className="container">
            <form className="loginForm">
                <h2>Iniciar Sesión</h2>
                <div className="formInput">
                    <AiOutlineMail/>
                    <input type="email" name="email" placeholder="Ingresar correo..." />
                </div>
                <div className="formInput">
                    <AiFillLock/>
                    <input type="password" name="password" placeholder="Ingresar contraseña..." />
                </div>
                <div className="passwordActions">
                    <Link to="/registro">Registrarme</Link> <p>Olvide mi clave</p>
                </div>
                <button className="submit">Ingresar</button>

                <div className="networkLogin">
                    <h3 className="networkLoginHeading">o bien</h3>
                    <AiFillGoogleCircle/>
                </div>

                <Link to="/ayuda" className="policyLink">Política de privacidad</Link>
            </form>
        </div>
    </main>
  )
}

export default Login