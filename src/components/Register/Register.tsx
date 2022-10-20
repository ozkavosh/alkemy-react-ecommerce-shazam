import "./Register.scss";
import { AiOutlineUser, AiFillLock, AiOutlineMail, AiFillGoogleCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="register">
      <div className="container">
        <form className="registerForm">
          <h2>Registrar nuevo usuario</h2>
          <div className="formInput">
            <AiOutlineUser/>
            <input type="text" name="displayName" placeholder="Ingresar nombre de usuario..." />
          </div>
          <div className="formInput">
            <AiOutlineMail/>
            <input type="email" name="email" placeholder="Ingresar correo..." />
          </div>
          <div className="formInput">
            <AiFillLock/>
            <input type="password" name="password" placeholder="Ingresar contraseña..." />
          </div>

          <Link to="/login" className="loginLink">Ya tengo cuenta</Link>

          <button className="submit">Registrar</button>

          <div className="networkLogin">
                    <h3 className="networkLoginHeading">o bien</h3>
                    <AiFillGoogleCircle/>
          </div>

          <Link to="/ayuda" className="policyLink">Política de privacidad</Link>
        </form>
      </div>
    </main>
  );
};

export default Register;
