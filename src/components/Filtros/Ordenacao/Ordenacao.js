import React, { useState } from "react";

function Ordenacao() {

  const [inputValue, setInputValue] = useState("");

  const catchValue = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <>
      <select value={inputValue} onChange={catchValue}>
        <option value="">Especialidade</option>
        <option value="Psicologos">Psicologos</option>
        <option value="op2">Nutricionistas</option>
        <option value="Fisioterapeutas">Fisioterapeutas</option>
      </select>
    </>
  );
}

export default Ordenacao