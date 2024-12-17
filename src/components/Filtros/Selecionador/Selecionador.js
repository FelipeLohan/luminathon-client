import React, { useState } from "react";
import styled from "styled-components";
import imgProfissional from "./image 6.png";

// Styled Components
const SelecionadorContainer = styled.section`
  margin: 0 auto;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  background-color: #fff;
  gap: 20px;
  border-radius: 6px;
  margin-top: 30px;
`;

const SelecionadorCepLogradouro = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  input {
    padding: 10px;
    border: 1px solid #000;
    border-radius: 6px;
    outline: none;
  }
`;

const SelecionadorValorEspecialidade = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  select {
    padding: 10px;
    border: 1px solid #000;
    border-radius: 6px;
    outline: none;
  }
`;

const ButtonPesquisar = styled.button`
  background-color: #a3d9a5;
  font-size: 2vmin;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #8bc48e;
  }
`;

// SECTION RESULTADO
const ContainerResultado = styled.section`
  width: 50%;
  margin: 0 auto;
  margin-top: 75px;
  margin-bottom: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  border-radius: 6px;
  color: #fff;
  background-color: #fff;
  padding: 50px 20px;
`;

const CardResultado = styled.div`
  display: flex;
  gap: 20px;
  background-color: #EEF5ED;
  border-radius: 6px;
  padding: 20px;
  color: #333;
  width: 80%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

const MarcarConsulta = styled.div`
  display: flex;
  align-items: center;

  button{
    padding: 20px;
    background:rgb(224, 255, 226);
    border: 1px solid rgb(246, 255, 247);
    cursor: pointer;
    border-radius: 20px;
}

button:hover{
  background: rgb(189, 243, 193);
  transition: 0.3s;
  color: #000;
}
`


function Selecionador() {
  const [ordenarPor, setOrdenarPor] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [APIresult, setAPIresult] = useState([]); // Estado para armazenar os resultados da API

  const handleSubmit = async () => {
    const data = {
      categoria: especialidade,
      ordenacao: ordenarPor,
    };

    console.log("Enviando dados:", data);

    try {
      const response = await fetch("http://localhost:8000/profissionais", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
      }

      const jsonResponse = await response.json();
      console.log("Resposta da API:", jsonResponse);
      setAPIresult(jsonResponse.profissionais); // Atualiza o estado com os dados da API
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  return (
    <>
      <SelecionadorContainer>
        <SelecionadorCepLogradouro>
          <input name="logradouro" placeholder="Logradouro" />
          <input name="cep" placeholder="Codigo Postal (CEP)" />
        </SelecionadorCepLogradouro>

        <SelecionadorValorEspecialidade>
          <select
            id="valor"
            name="Valor"
            value={ordenarPor}
            onChange={(e) => setOrdenarPor(e.target.value)}
          >
            <option value="">Ordenar por...</option>
            <option value="avaliacao">Avaliação</option>
            <option value="valor">Valor</option>
          </select>
          <select
            id="especialidade"
            name="Especialidade"
            value={especialidade}
            onChange={(e) => setEspecialidade(e.target.value)}
          >
            <option value="">Especialidade...</option>
            <option value="Fisioterapeutas">Fisioterapeuta</option>
            <option value="Psicologos">Psicologo</option>
            <option value="Nutricionistas">Nutricionista</option>
          </select>
        </SelecionadorValorEspecialidade>

        <ButtonPesquisar onClick={handleSubmit}>Pesquisar</ButtonPesquisar>
      </SelecionadorContainer>

      {/* Renderizando os resultados */}
      <ContainerResultado>
        {APIresult.length > 0 ? (
          APIresult.map((item) => (
            <CardResultado key={item.id}>
              <img src={imgProfissional} />
              <div>
                <h3>{item.nome}</h3>
                <p>Especialidade: {especialidade}</p>
                <p>Avaliação: {item.avaliacao}</p>
              </div>
              <MarcarConsulta>
                <button>Marcar Consulta</button>
              </MarcarConsulta>

            </CardResultado>
          ))
        ) : (
          <p>Nenhum resultado encontrado</p>
        )}
      </ContainerResultado>
    </>
  );
}

export default Selecionador;
