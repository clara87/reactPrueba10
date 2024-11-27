import { useState, useEffect } from "react";
import "./App.css";
import Articulo from "./Articulo";
import BtnCategoria from "./BtnCategoria";
import { Link } from "react-router-dom";


function ProductList() {
  const [producto, setProducto] = useState([]);
  const [categoria, setCategoria] = useState("Todas");

  const handleSetCategoria = (categoriaHijo) => {
    setCategoria(categoriaHijo)
    console.log(categoria)

  }
  useEffect(() => {
    let url = ""
    if (categoria === "Todas") {
      url = "http://fakestoreapi.com/products"
    } else {
      url = `http://fakestoreapi.com/products/category/${categoria}`
    }

  
    async function fetchBack() {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setProducto(data)
    }
    fetchBack()
  }, [categoria]);

  return (
    <>
       <Link to={"/"}>volver a home</Link>
      <h1>Productos</h1>
      <BtnCategoria texto={"electronics"} categoria={"electronics"} funcionPadre={handleSetCategoria} />
      <BtnCategoria texto={"jewelery"} categoria={"jewelery"} funcionPadre={handleSetCategoria} />
      {producto.map((producto) => (<Articulo key={producto.id} articulo={producto} />))}
    </>
  );
}

export default ProductList;