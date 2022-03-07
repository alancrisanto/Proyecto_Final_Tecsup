import { useRef } from "react";
import imagenes from "../assets/imagenes";
/* import subirImage from '../services/uploadService'; */

export default function FormPublicar({
  value,
  actualizarInput,
  manejarSubmit,
  manejarImagen,
  categoria,
}) {
  const inputFile = useRef();

  return (
    <>
      <section className="pagina-6 container-fluid  d-flex align-items-center">
        <div className="row justify-content-center">
          <div className="position-relative col-12">
            <img
              className="w-100 publicar"
              src={imagenes.img21_publicar_fondo}
              alt="publicar"
            />
            <h3 className="text-center position-lg-absolute promocion my-4 display-5 ">
              <span className="fw-light">
                Miles de negocios buscan cocinas ocultas
              </span>{" "}
              , Alquila y gana!!
            </h3>
            <button className="position-absolute btn-publicar btn btn-secondary text-white">
              Publicar
            </button>
          </div>

          <form
            className="formulario-publicar my-4 col-12"
            onSubmit={(e) => {
              manejarSubmit(e);
            }}
          >
            <div className="contenido--form">
              <h3 className="display-6 py-4 text-center">PUBLICAR</h3>

              <label>Sube las mejores fotos</label>

              <input
                type="file"
                className="w-100"
                id="file"
                ref={inputFile}
                onChange={(e) => {
                  manejarImagen(e);
                }}
              />

              <label htmlFor="file" className="w-100">
                <span className="file-box">
                  <img
                    src={imagenes.img24_camera}
                    width="20px"
                    className="img-icon"
                  />
                </span>
              </label>

              <label>Titulo</label>
              <input
                className="w-100"
                name="titulo"
                type="text"
                value={value.titulo}
                placeholder="Ejem: Cocina amoblada, lista para usarse ..."
                onChange={(e) => {
                  actualizarInput(e);
                }}
              />

              <label>Precio Soles (PEN)</label>
              <input
                className="w-100"
                type="text"
                name="precio"
                value={value.precio}
                onChange={(e) => {
                  actualizarInput(e);
                }}
                placeholder="Ejem: 1200"
              />

              <div className="d-md-flex">
                <div className="area me-md-3">
                  <label>Area m2</label>
                  <input
                    className="w-100"
                    type="text"
                    name="area"
                    value={value.area}
                    onChange={(e) => {
                      actualizarInput(e);
                    }}
                    placeholder="Ejem: 6"
                  />
                </div>

                <div className="amoblado">
                  <label>Amoblado?</label>
                  <select
                    value={value.categoria_id}
                    className="w-100 text-success"
                    name="amoblado"
                    onChange={(e) => {
                      actualizarInput(e);
                    }}
                  >
                    {categoria.map((cat, i) => (
                      <option value={cat.id} key={i}>
                        {cat.nombre}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="textarea">
                <label>Descripción</label>

                <textarea
                  cols="30"
                  rows="10"
                  className="w-100 text-success"
                  name="descripcion"
                  value={value.descripcion}
                  onChange={(e) => {
                    actualizarInput(e);
                  }}
                >
                  Describe la cocina, brinda el mejor detalle
                </textarea>
              </div>

              <div className="contenido-ubicacion">
                <div className="ubicacion">
                  <label>País</label>
                  <input
                    name="pais"
                    type="text"
                    className="w-100 "
                    value={value.pais}
                    onChange={(e) => {
                      actualizarInput(e);
                    }}
                    placeholder="Ejem:Perú"
                  />
                </div>

                <div className="ubicacion">
                  <label>Ciudad</label>
                  <input
                    name="ciudad"
                    className="w-100 "
                    type="text"
                    value={value.ciudad}
                    onChange={(e) => {
                      actualizarInput(e);
                    }}
                    placeholder="Ejem: Lima"
                  />
                </div>
                <div className="ubicacion">
                  <label>Distrito</label>
                  <input
                    name="distrito"
                    className="w-100"
                    type="text"
                    value={value.distrito}
                    onChange={(e) => {
                      actualizarInput(e);
                    }}
                    placeholder="Ejem: Los Olivos"
                  />
                </div>
              </div>

              <button
                className="my-3 btn btn-secondary w-100 text-white"
                type="submit"
              >
                PUBLICAR
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* //////////////////////////// */}
      {/* <section className="pagina-6 container-fluid  d-flex align-items-center">
      <div className="row  justify-content-center">
    

        <form className="formulario-publicar my-4 col-12">
          <div className="contenido--form">
        


            <input className="w-100" type="text" placeholder="Ubicacion" />
            <button className="my-3 btn btn-secondary w-100 text-white">
              PUBLICAR
            </button>
          </div>
        </form>
      </div>
    </section> */}
    </>
  );
}
