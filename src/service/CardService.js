import axios from "axios"


const URL = `${process.env.REACT_APP_BACK_URL}`

const getProductos = async (pagina = 1, limite = 1) => {
    try {
        //const { data } = await axios.get(`${URL}local?page=${pagina}&limit=${limite}`);
        const { data } = await axios.get(`${URL}local?page=${pagina}&limit=${limite}`);
        console.log(data);
        return data.content;

    } catch (error) {
        throw error;
    };
};


export { getProductos }