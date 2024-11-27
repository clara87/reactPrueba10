import { BrowserRouter , Routes, Route} from "react-router-dom";
import "./App.css";
import Titulo from "./Titulo";
import Home from "./Home";
import ProductList from "./ProductList";
import DetalleArticulo from "./DetalleArticulo";

function App() {
  return (
<BrowserRouter>

<Routes>
<Route path="/" element={<Home/>} />
<Route path="/producto" element={<ProductList/>} />
<Route path="/producto/:id" element={<DetalleArticulo/>} />
</Routes>
</BrowserRouter>
  );
}

export default App;