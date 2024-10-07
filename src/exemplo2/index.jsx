import { useEffect, useState } from "react";

export default function App() {
  
  const [Fotos, setFotos] = useState([]);

  useEffect(() => { 

    const buscarUsuario  = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/photos');
        const dados = await resp.json();
        setFotos(dados);
    }
    buscarUsuario();
  },[]);
  return (
    <>
      <h1>Galeria de Fotos</h1>
      <ul>
      {Fotos.map(produto => (
          <li key={produto.id}>
            <h2>{produto.title}</h2>
            <p>album{produto.albumId}</p>
            <p>{produto.url}</p>
            <img src={produto.thumbnailUrl} alt={produto.title} width={100} />
          </li>
        ))}
      </ul>
    </>
  );
}
