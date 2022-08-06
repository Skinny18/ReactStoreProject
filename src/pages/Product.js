import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";
const Product = () => {
    const { id } = useParams(); 

    const url = "http://localhost:3000/products/" + id
    const {data: product, loading, error} = useFetch(url)

  return (
    <>
    <p>
        Id do produto: {id}
    </p>
    {error && <p>Ocorreu um erro ao carregar os dados</p>}
    {loading && <p>Carregando...</p>}
    {product && (
        <div>
            <h1>{product.name}</h1>
            <h2>R${product.price}</h2>
            <Link to={`/products/${product.id}/info`}>Mais Informaçoes</Link>
        </div>
    )}
    </>
  )
}

export default Product