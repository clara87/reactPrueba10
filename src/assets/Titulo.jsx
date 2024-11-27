import { useParams } from "react-router-dom";
const Titulo = () => {
    const {id} = useParams()

    return (<h1>{id}</h1>)
}
export default Titulo