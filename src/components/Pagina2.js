import { useState, useEffect } from "react";
import {
  obtenerProductos,
  eliminarProducto,
} from "../service/productosService";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


import imagenes from "../assets/imagenes";

export default function Pagina2() {
  const [locales, setLocales] = useState([]);
  const [tablaLocal, setTablaLocal] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const peticionGet = async () => {
    try {
      const localesobtenidos = await obtenerProductos();
      console.table(localesobtenidos);
      setTablaLocal(localesobtenidos);
      setLocales(localesobtenidos);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaLocal.filter((elemento) => {
      if (
        elemento.ciudad
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.distrito
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });

    setLocales(resultadosBusqueda);
  };

  const verificarEliminar = async (id) => {
    const respuesta = await Swal.fire({
      icon: "warning",
      title: "Desea eliminar el producto?",
      text: "Esta acción es irreversible",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "Sí, Eliminar",
      denyButtonText: "No, Cancelar",
    });
    if (respuesta.isConfirmed) {
      try {
        await eliminarProducto(id);
        await Swal.fire({
          icon: "success",
          title: "Producto eliminado!",
        });
        peticionGet();
      } catch (error) {
        console.log(error);
      }
    }
  };

  // const [productos, setProductos] = useState([]);

  // const getProductos = async () => {
  //   try {
  //     const productosObtenidos = await obtenerProductos();
  //     // console.table(productosObtenidos);
  //     setProductos(productosObtenidos);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getProductos();
  // }, []);

  useEffect(() => {
    peticionGet();
  }, []);
  return (
    <section className="pagina2 d-flex align-items-center container">
      <div className="row justify-content-center">
        <div className="contenido__buscador position-relative col-12">
          <div className="position-relative">
            <img className="img-fluid risas col-12" src={imagenes.img2} />
            <h3 className="mx-4 text-title display-5 col-7 col-sm-8 col-md-6 col-xl-5 fw-light">
              Alquila cocinas fantasma <span className="fw-bold">Aqui!!!</span>
            </h3>
          </div>

          <div className="buscador position-lg-absolute mx-lg-4">
            <input
              className="my-4"
              type="search"
              value={busqueda}
              placeholder="Buscar por zonas Ejemplo: Miraflores"
              onChange={handleChange}
            />

            <Link
              to="/pagina6View"
              className="propietario btn btn-outline-info"
            >
              Soy propietario
            </Link>
            <Link
              to="/pagina3"
              className="ingresar mx-2 btn btn-secondary text-white"
            >
              Ingresar
            </Link>
          </div>
        </div>

        <div className="my-4 col-12">
          <p>
            Acercate a tus clientes, amplia tu negocio, escoge aqui tu proximo
            punto de reparto
          </p>
        </div>

        {/* Estas son las tarjetas */}

        <div className="cartas">
          
          {locales.map(
            (
              { precio, imagen, descripcion, pais, ciudad, distrito, id },
              i
            ) => (
              <div>
                <Link className="col-12" to="/pagina5" key={i}>
                  <img
                    className="card-img-top"
                    src={imagen}
                    alt="cocina"
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <p>
                    <span className="text-primary fw-bold">Precio mensual: </span>
                    <span className="text-info fw-bold"> $/ {precio}</span>
                    <br />
                    <span className="text-primary fw-bold">Mantenimiento: </span>
                    <span className="text-info fw-bold">$/ 45</span>
                    <br />
                    <span className="text-primary fw-bold">Descripcion: </span>
                    <span className="text-info fw-bold">{descripcion}</span>
                    <br />
                    <span className="text-info fw-bold">
                      cocinar y hacer [...]
                    </span>
                    <br />
                    <span className="text-primary fw-bold">Direccion: </span>
                    <span className="text-info fw-bold">
                      {pais}-{ciudad}-{distrito}
                    </span>
                  </p>

                </Link>
                <button
                className="btn btn-secondary text-white  my-2"
                onClick={() => {
                  verificarEliminar(id);
                }}
              >
                Eliminar
              </button>
            </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
