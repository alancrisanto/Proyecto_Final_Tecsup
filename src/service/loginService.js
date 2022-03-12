import axios from "axios";


const request = axios.create({
    baseURL: `${process.env.REACT_APP_BACK_URL}`,
    headers: {
        "Content-Type": "application/json"
    },
});


export const registroUsuario = (data) => {
    return request.post("/registro", data);
};

export const loginUsuario = (data) => {
    return request.post("/login", data);
};