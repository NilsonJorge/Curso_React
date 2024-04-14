import { useState, useEffect } from 'react'
import './App.css'

// 4 custom rook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([]);

  // 4- custom rook
  const {data: items, httpConfig , loading, error} = useFetch(url);

  
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  //1- resgatando dados
  /* useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      
      }
    }
    fetchData();
  }, []);*/

  //2- add produto

  const handleSumit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    /*const res = await fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),
    });
    // 3 - carregamento dinâmico

    /*pega a resposta da requisição, que é o que foi adicionado e 
    coloca na lista para não precisar fazer uma nova requisição GET 
    para coletar a lista atualizada
    const addedProduct = await res.json()
    setProducts((prevProducts) => [...prevProducts, addedProduct])*/

    //5 -refatorando post
    httpConfig(product,"POST")

    setName("")
    setPrice("")
  };

  //8 - desafio 6
  const handleRemove = (id) => {
    httpConfig(id,"DELETE")
  };

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/*6 -Loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!loading && <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
           <button onClick={()=> handleRemove(product.id)}>Excluir</button>
          </li>

        ))}
      </ul>}
      <div className="add-products">
        <form onSubmit={handleSumit}>
          <label>
            Nome:
            <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" value={price} name='price' onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/*7 - state de loading no post */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar produto" />}
        </form>
      </div>
    </div>
  )
}

export default App
