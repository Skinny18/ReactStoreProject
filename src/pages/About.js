import "./About.css";
import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
const url = "http://localhost:3000/products";

const About = () => {
  const [products, setProducts] = useState([])
  const[name, setName] = useState("")
  const[price, setPrice] = useState("")

  const {data: items, httpConfig, loading, error} = useFetch(url);

  const handleSubmit = async(e) => {
    e.preventDefault()
  
    const product = {
        name,
       price,
     };
  
  
    httpConfig(product, "POST");
  
    setName("")
    setPrice("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
         <label>Nome:
           <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}></input>
         </label>

         <label>Preço:
           <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)}></input>
         </label>

         {loading && <input type="submit" disable value="Aguarde"/>}
         {!loading && <input type="submit" value="Criar"/>}
       </form>

    </div>
  )
}

export default About