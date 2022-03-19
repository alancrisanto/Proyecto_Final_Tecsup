import axios from "axios";

const URL = `${process.env.REACT_APP_BACK_URL}/listar`;

const obtenerProductos = async () => {
  try {

    const { data } = await axios.get(URL);
    console.log(data.content);
    return data.content;
  } catch (error) {
    throw error;
  }
};

const obtenerLocalPorId = async (id) => {
  try {
    let { data } = await axios.get(`${URL}/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

const eliminarProducto = async (id) => {
  try {
    await axios.delete(`${URL}/${id}`);
    return "producto eliminado";
  } catch (error) {
    throw error;
  }
};

export { obtenerProductos, eliminarProducto, obtenerLocalPorId };
