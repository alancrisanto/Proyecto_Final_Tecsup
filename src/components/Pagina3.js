import { Link } from "react-router-dom";
import {AuthContext} from "../context/authContext";
import { useContext, useState } from "react";
import { loginUsuario } from "../service/loginService";
import { useNavigate } from "react-router-dom";

//Aqui estan mis imagenes
import imagenes from "../assets/imagenes";

export default function Pagina3() {

  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const loginValor = (e) => {
    // console.log(e)
    // console.log(e.target.id)
    // console.log(e.target.value)
    setLogin((prevalue) => ({...prevalue, [e.target.id]: e.target.value}))
  }

  const loginPersona = async (e) => {
    e.preventDefault();
    console.log(e)
    try {
      const {data} = await loginUsuario(login);
      console.log(data);
      alert(data.message)
      localStorage.setItem('token', data.token)
      navigate("/pagina2")
    } catch (error) {
      console.log("Hubo un error");
      alert(error.response.data.message)
    }
  }

  const {user, signOut, signIn} = useContext(AuthContext);

  return (
    <section className="container">
      <div className="row align-items-center vh-100">
        <form className="mt-4 order-1 order-lg-0 col-12 col-lg-5">
          <label className="d-block" htmlFor="correo">Email</label>
          <input
            className="w-100  mb-3"
            id="correo"
            type="text"
            placeholder="Ingrese e-mail"
            onChange={loginValor}
          />

          <label className="d-block" htmlFor="password">Contraseña</label>
          <input
            className="w-100 "
            id= "password"
            type="password"
            placeholder="Ingrese Contraseña"
            onChange={loginValor}
          />

          <div className="d-flex flex-column">
            <button className="my-4 align-self-end ingresar btn btn-secondary text-white" onClick={loginPersona}>
              Ingresar
            </button>
            <a className=" align-self-end" href="#">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <div className="my-5 position-absolute">
            <p>Si no tienes una cuenta registrate</p>
            <Link
              to="/pagina4"
              className="propietario mb-4 btn btn-outline-info"
            >
              Registrate
            </Link>
          </div>
        </form>

        <div className="position-relative col-12 col-lg-7">
          <img
            className="img-fluid img-xl-fluid"
            src={imagenes.img7_cocinera}
            alt="cocinera"
          />
          <div className="ms-4 position-absolute top-0">
            <h3 className="mt-5 mb-3 display-6">Iniciar sesion</h3>
            <button className="google__cuenta btn btn-outline-primary" onClick={signIn}>
              <img className="me-2" src={imagenes.img8_google} alt="" />
              Ingresa con Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
