import axios from "axios";

const URL = `${process.env.REACT_APP_API}local`;

const obtenerProductos = async () => {
  try {
    const { data } = await axios.get(URL);
    return data;
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
