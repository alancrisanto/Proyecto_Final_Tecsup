import { useState } from "react";
import { Link } from "react-router-dom";
import { registroUsuario } from "../service/loginService";
import { useNavigate } from "react-router-dom";
//Aqui estan mis imagenes
import imagenes from "../assets/imagenes";


export default function Pagina4() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    "password": ""
  });

  const registroValor = (e) => {
    // console.log(e)
    // console.log(e.target.value)
    // console.log(e.target.id)
    setForm((prevalue) => ({...prevalue, [e.target.id]: e.target.value}));
  }

  const registroPersona = async (e) => {
    e.preventDefault();
    try {
      const {data} = await registroUsuario(form);
      alert(data.message)
      localStorage.setItem("token", data.token);
      navigate("/pagina2")
    } catch (error) {
      alert("Hubo un error al crear registro");
    }

  }
  return (
    <section className="container ">
      <div className="row vh-100 align-items-center">
        <div className="position-relative col-12 col-lg-6">
          <img
            className="img-fluid img-xl-fluid"
            src={imagenes.img9_registro}
            alt=""
          />
          <div className="bienvenida position-absolute">
            <h3 className="display-4">Bienvenidos</h3>
            <p className="text-info">Para darte un mejor servicio regístrate</p>
          </div>
        </div>

        <form className="formulario__registro my-4 col-12 col-lg-6">
          <div className="titulo">
            <h3 className="display-4">Registro</h3>
            <p>Ven se parte de nosotros</p>
          </div>

          <div className="contenido_registro">
            <label className="d-block" htmlFor="nombre">Nombres y Apellidos</label>
            <input
              className="w-100"
              id="nombre"
              type="text"
              placeholder="Ingrese su nombre y apellido"
              onChange={registroValor}
            />

            <label className="d-block" htmlFor="correo">E-mail</label>
            <input 
              className="w-100" 
              id="correo"
              type="text" 
              placeholder="Ingrese e-mail"
              onChange={registroValor}
            />

            <label className="d-block">Pais</label>
            <select className="w-100 text-success" name="pais">
              <option selected disabled>
                Seleccione su pais
              </option>
              <option>Peru</option>
              <option>Chile</option>
              <option>Colombia</option>
            </select>

            <label className="d-block" htmlFor="password">Contraseña</label>
            <input
              className="w-100"
              id="password"
              type="password"
              placeholder="Ingrese Contraseña"
              onChange={registroValor}
            />

            <label className="d-block">Repita contraseña</label>
            <input
              className="w-100"
              type="password"
              placeholder="Ingrese Contraseña"
            />

            <Link 
              to="/pagina2" 
              className="btn btn-info text-white my-4"
              onClick={registroPersona}
            >
              Crear cuenta
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
