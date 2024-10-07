import { useEffect, useState } from "react";

export default function App() {

  const [Lista, setLista] = useState([]);

  useEffect(() => {

    const mexirica = async () => {
      const resposta = await fetch('https://randomuser.me/api');
      const dados = await resposta.json();
      setLista(dados);
    }
    mexirica();
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        {<p>{Lista?.gender}</p>}
      </ul>
    </>
  );
}
