import React, { useState } from "react";
import styled from 'react-styles'
function Avaliacao() {
  const [inputValue, setInputValue] = useState("");

  const catchValue = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <>
    <select value={inputValue} onChange={catchValue}>
      <option value="">Avaliação</option>
      <option value="Psicologos">Psicologos</option>
      <option value="op2">Nutricionistas</option>
      <option value="Fisioterapeutas">Fisioterapeutas</option>
    </select>
  </>
  )
}

export default Avaliacao
