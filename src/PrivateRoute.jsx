import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

import decode from 'jwt-decode';


export const PrivateRoute = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() => {
        if (localStorage.getItem("token")){
            try {
                const result = decode(localStorage.getItem("token"));
                console.log(result);
                setToken(localStorage.getItem("token"))
            } catch (error) {
                alert("Información del Usuario incorrecta");
                localStorage.removeItem("token");
                setToken(null);
            }
        }
    }, [])


    return token ? children : <Navigate to={"/pagina3"} />
}
