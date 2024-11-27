import Header from "./Header";
import { Link } from "react-router-dom";

const Home = () => {
    return (  
        <div>
        <Header/>  
        <h1>Home</h1>    
        <Link to={"/producto"}>ir a productos</Link>
        </div>
    )
}
export default Home