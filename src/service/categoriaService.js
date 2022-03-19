import axios from "axios";

const URL = `${process.env.REACT_APP_BACK_URL}/categoria`;
/*const URL="https://616b5ebb16c3fa001717168e.mockapi.io/categoria";  */




const obtenerCategoria = async () => {
    try {
        const { data } = await axios.get(URL);
        return data;
    } catch (error) {
        throw error;
    }
};

export { obtenerCategoria };
