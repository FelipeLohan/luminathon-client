import styled from "styled-components"

const PropagandaContainer = styled.section`
  display: flex;
  flex-direction: column;

`

const PropagandaFiltro = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: #C3A289;
  padding: 20px;
  gap: 20px;
  height: 200px;
  
  h3 {
    font-size: 6vmin;
  }

  p{
    font-size: 2.5vmin;
  }
`

const PropagandaBusca = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: #A3D9A5;
  align-items: end;
  padding: 20px;
  gap: 20px;
   height: 200px;
  
  h3 {
    font-size: 6vmin;
  }

  p{
    font-size: 2.5vmin;
  }
`


function Propaganda(){
  return(
    <PropagandaContainer>
      <PropagandaFiltro>
        <h3>Filtro de Profissionais</h3>
        <p>Nossa ferramenta ajuda nossos clientes a acharem diferentes médicos para suas necessidades.</p>
      </PropagandaFiltro>
      <PropagandaBusca>
        <p>Os profissionais são encontrados através de métricas para melhor experiência do usuário.</p>
        <h3>Busca Aprimorada</h3>
      </PropagandaBusca>
      </PropagandaContainer>
  )
}

export default Propaganda