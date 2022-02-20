import axios from "axios"


const URL = `${process.env.REACT_APP_API}`

const getProductos = async (pagina = 1, limite = 1) => {
    try {
        const { data } = await axios.get(`${URL}local?page=${pagina}&limit=${limite}`);
        return data;

    } catch (error) {
        throw error;
    };
};


export { getProductos }