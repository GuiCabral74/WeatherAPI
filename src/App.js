import React, { useState } from "react";
import { weather, unsplash } from "./components/FetchApi";
import GlobalStyle from "./style/globalStyles";
import { Paragrafo, ContainerApp, Image } from "./style/styled";

const App = () => {
  const [cidade, setCidade] = useState([]);
  const [cidadeImg, setCidadeImg] = useState([]);
  const [nomeCidade, setNomeCidade] = useState([]);

  const buscarDados = async (cidade) => {
    try {
      setNomeCidade(cidade);
      const response = await weather.get(
        `/weather?q=${cidade}&appid=3f9f8350145cc0cccd173d39e6b30607&units=metric`,
      );
      const data = await response.data;
      setCidade(data.main);
    } catch (err) {
      console.log(err);
    }
  };

  const buscarImg = async (cidade) => {
    try {
      const response = await unsplash.get(
        `/photos?page=1&query=${cidade}&client_id=RMdSxLBhlMor5N-XA_RXi3ibTPiX3JHtJTLSX2_HBuY`,
      );

      const data = await response.data;
      setCidadeImg(data.results[0].urls.small);
    } catch (err) {
      console.log(`Erro apresentado: ${err}`);
      alert("Cidade não encontrada, tem certeza que escreveu certo?");
      window.location.reload();
    }
  };

  return (
    <ContainerApp>
      <GlobalStyle />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          buscarDados(cidade);
          buscarImg(cidade);
        }}
      >
        <label>Digite a cidade: </label>
        <input type="text" onChange={(e) => setCidade(e.target.value)} />
        <button> Enviar </button>
      </form>

      {cidade.temp ? (
        <p>{`A temperatura é de: ${cidade?.temp}º em ${nomeCidade}.`}</p>
      ) : (
        <Paragrafo>
          Digite uma cidade para ver a temperatura e a imagem.
        </Paragrafo>
      )}
      <Image src={cidadeImg} alt={cidade}></Image>
    </ContainerApp>
  );
};

export default App;
