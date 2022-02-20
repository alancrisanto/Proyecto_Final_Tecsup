import imagenes from "../assets/imagenes";
import {RWebShare} from "react-web-share"
import Swal from 'sweetalert2'

export default function Pagina5CardsView({ producto }) {
  const {
    titulo,
    descripcion,
    precio,
    imagen,
    area,
    categoria,
    pais,
    ciudad,
    distrito,
    amoblado,
  } = producto;

  const alertSave = () => {
    Swal.fire({
      icon: "success",
      title: "Añadido a favoritos",
      showConfirmButton: false,
      timer: 1800,
    });
  };


  return (
    <div className="mt-4  mt-xxl-0 col-xxl-3 ">
      <div className="row ">
        <div className="col-md-6 col-xxl-12">
          <div className="remodelada d-flex justify-content-center h-100 bg-white">
            <div className="p-2 col-12 col-sm-10 col-md-12">
              <h4 className="fs-6">{titulo}</h4>

              <p className="precio">S/ {precio}</p>
              <p>
                Listed in la {distrito}. {ciudad}
              </p>

              <div className="contenido__botones">
                <button className="btn btn-primary me-2 me-sm-3">
                  Contactar <img src={imagenes.img15_mensaje} alt="mensaje" />
                </button>
                <button className="btn btn-warning me-1 me-sm-2" onClick={() => {alertSave()}}>
                  <img src={imagenes.img16_guardar} alt="guardar"/>
                </button>
                <RWebShare className="btn btn-warning me-1 me-sm-2"
                  data={{
                    text:"Cocinas ocultas, encuentralas en Hideb",
                    url:"https://github.com/xDavid-Gabriel/proyecto-final-fronEnd",
                    title:"Hideb Cocinas ocultas"
                  }}
                  onClick={() => console.log("compartido con éxito")}>
                    <button className="btn btn-warning me-1 me-sm-2"> <img src={imagenes.img17_compartir} alt="compartir" /></button>
                </RWebShare>
                <button className="btn btn-warning me-1 me-sm-2">
                  <img src={imagenes.img18_tres_puntos} alt="puntos" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 mt-md-0 mt-xxl-4  col-md-6 col-xxl-12">
          <div className="d-flex justify-content-center bg-white h-100">
            <div className="p-2 col-12 col-sm-10 col-md-12">
              <h4 className="fs-6">Details</h4>
              <div className="d-flex justify-content-between">
                <p>
                  <span>Area:</span>
                  {area} m2
                </p>
                <p>
                  <span>Implentado:</span>Si
                </p>
              </div>
              <p>{descripcion}</p>
            </div>
          </div>
        </div>

        <div className="mapa mt-4 col-md-6 col-xxl-12">
          <div className="d-flex justify-content-center h-100 bg-white">
            <div className="p-2 col-12 col-sm-10 col-md-12">
              <h4 className="fs-6">Publicado en</h4>
              <p>
                La {distrito}. {ciudad}
              </p>
              <img className="img-fluid" src={imagenes.img19_mapa} alt="Mapa" />
            </div>
          </div>
        </div>

        <div className="calificacion mt-4  col-md-6 col-xxl-12">
          <div className="d-flex justify-content-center h-100 bg-white">
            <div className="p-2 col-12 col-sm-10 col-md-12">
              <h4 className="fs-6">Calificaciones del arrendador</h4>
              <img
                className="img-fluid my-2 "
                src={imagenes.img20_calificacion}
                alt="calificacion"
              />
              <p>Calificacion de 10 personas Mienbro desde Octubre 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
