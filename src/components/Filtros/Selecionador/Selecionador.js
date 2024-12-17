import React, { useState } from "react";
import styled from "styled-components";

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

const ContainerResultado = styled.section`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  background: red;
  gap: 20px;
  border-radius: 6px;
  color: #fff;
  background-color: #C3A289;
  padding: 20px;
  gap: 20px;
  height: 200px;

`;

//SECTION RESULTADO:


let APIresult = [];


function Selecionador() {
  // Estados para armazenar os valores dos selects
  const [ordenarPor, setOrdenarPor] = useState("");
  const [especialidade, setEspecialidade] = useState("");

  const handleSubmit = async () => {
    // Criação do objeto com os valores dos selects
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
      APIresult = jsonResponse;
      console.log(APIresult);
      const plainObject = JSON.parse(APIresult);

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
        {/* Capturando os valores dos selects */}
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
    <ContainerResultado>
    <h1>aaa</h1>

    </ContainerResultado>
    
    </>
  );
}

export default Selecionador;
