import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

const Product = () => {
    //4 - rota dinamica
    const {id}= useParams();// pega o id da pagina

    //5 - carregamento dado individual
    const url = "http://localhost:3000/products/" + id

    const {data:product, loading, error} = useFetch(url)

    return (
        <>
        <p>ID do produto: {id}</p>
        {error && <p>Ocorreu um erro...</p>}
        {loading && <p>Carregando...</p>}
        {product && (
            <div>
                <h2>{product.name}</h2>
                <p>R$:{product.price}</p>
                {/* 6 - nested routes */}
                <Link to={`/products/${product.id}/info`}>Mais Informações</Link>
            </div>
        )}
        </>
    )
}

export default Product