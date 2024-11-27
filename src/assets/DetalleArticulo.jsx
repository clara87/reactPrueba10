import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const DetalleArticulo = () => {
    const {id} = useParams();
    const [producto, setProducto] =useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        let url = `http://fakestoreapi.com/products/${id}`;
        async function fetchBack() {
          const response = await fetch(url)
          const data = await response.json()
          console.log(data)
          setProducto(data)
          setIsLoading(false)
        }
        fetchBack()
      }, []);

      if (isLoading) {
        return (<h1>Loading...</h1>);
      }

    return (
        <>
            <h1>{producto.title}</h1>
            <Link to={"/producto"}>volver a productos</Link>
            <br/>
            <img src={producto.image} alt="" />
            <p>{producto.price}</p>
            
        </>
    );
};
export default DetalleArticulo;