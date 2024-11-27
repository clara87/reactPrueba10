import "./Articulo.css"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Articulo = ({ articulo }) => {
    const navigate = useNavigate();

    const handleClick = () => {
       navigate(`/producto/${articulo.id}`); 
    }
    return (
        <>
            <div className="contenedor" onClick={handleClick}>
                <img className="img" src={articulo.image} alt={articulo.description} />
                <div>
                    <h2 className="titulo">{articulo.title}</h2>
                    <p className="descripcion">{articulo.description}</p>
                    <p className="precio">${articulo.price}</p>
                </div>


            </div>
        </>
    );
};
export default Articulo