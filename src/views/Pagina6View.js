import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { crearLocal, subirImagen } from "../service/localServices";
import { obtenerCategoria } from "../service/categoriaService";
import FormPublicar from "../components/Pagina6";
import Subir from "../components/Subir";
import Swal from "sweetalert2";

let imagen;

export default function UploadView() {
  const [value, setValue] = useState({
    titulo: "",
    descripcion: "",
    precio: " ",
    area: " ",
    categoria_id: 1,
    pais: "",
    ciudad: "",
    distrito: "",
  });

  const [categoria, setCategoria] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const actualizarInput = (e) => {
    /* console.log(e.target.name, e.target.value);
     setValue({
       ...value, //cogiendo el estado de value, spreadoperator
       [e.target.name]: e.target.value,
     });
   };*/


    if (e.target.name == "precio" || e.target.name == "area") {
      const precio = e.target.value
      setValue({ ...value, [e.target.name]: parseFloat(e.target.value) })  //cogiendo el estado de lvalue y spred operatr
    }

    else {
      if (e.target.name == "categoria_id") {
        setValue({ ...value, [e.target.name]: parseInt(e.target.value) })  //cogiendo el estado de lvalue y spred operatr
      } else {
        setValue({ ...value, [e.target.name]: e.target.value })  //cogiendo el estado de lvalue y spred operatr
      }
    }
  }
  const manejarSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const urlImagenSubida = await subirImagen(imagen);
      console.log(value);
      await crearLocal({ ...value, imagen: urlImagenSubida });
      //después de que haya terminado de crear el producto
      setLoading(false);
      await Swal.fire({
        icon: "success",
        title: "Felicidades!",
        text: "Tu anuncio ya está en circulación!",
        // showConfirmButton: false, //es para que no me muestre un boton de cierre
        // timer: 2000, //ms
      });
      //antes de dirigime a navigate
      navigate("/pagina2");
    } catch (error) {
      console.log(error);
    }
  };

  const manejarImagen = (e) => {
    e.preventDefault();
    console.log(e.target.files);
    imagen = e.target.files[0]; //como para utilizar
  };

  useEffect(() => {
    const getCategorias = async () => {
      try {
        const catObtenidas = await obtenerCategoria();
        console.log(catObtenidas);
        setCategoria(catObtenidas);
      } catch (error) {
        console.error(error);
      }
    };
    getCategorias();
  }, []);

  return (
    <>
      {loading === true ? (
        <Subir />
      ) : (
        <FormPublicar
          value={value}
          actualizarInput={actualizarInput}
          manejarSubmit={manejarSubmit}
          manejarImagen={manejarImagen}
          categoria={categoria}
        />
      )}
    </>
  );
}
