import { useParams } from "react-router-dom"


export default function User(){
    const {id} = useParams()

    return(
        <div>
            <h1>Este es el componente User {id}</h1>
        </div>
    )
}