import { useParams } from "react-router-dom"


export default function Product(){
    const {id} = useParams()

    return(
        <div>
            <h1>Este es el componente Product {id}</h1>
        </div>
    )
}