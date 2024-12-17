import styled from "styled-components";
import headerImg from "./image/headerImg.png";
import logo from "./image/Component 2.svg";
import user from "./image/user-svgrepo-com 1.svg";
import { Link } from 'react-router-dom';

const HeaderIMG = styled.header`
  background-image: url(${headerImg})
`

const HeaderContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 60px;
  justify-content: center;
  text-align: center;
  color: #fff;
  
  h1 {
    font-size: 8vmin;
  }
  
  h2 {
    font-size: 4vmin;
  }
  
  a {
    padding: 30px 36px;
    background-color: #A3D9A5;
    font-weight: 700;
    font-size: 4vmin;
    border-radius: 6px

  }
`
const LogoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
`

function Header() {
  return (
    
    <HeaderIMG>
      <LogoHeader>
      <img src={logo} />
      <img src={user} />
      </LogoHeader>
      <HeaderContainer>
        
      <h1>A ferramenta ideal para suas consultas</h1>
      <h2>Venha fazer parte da inovação! Nossa ferramenta simplifica sua vida reduzindo o tempo gasto achando um profissional de saúde!</h2>  
      <a href="#filtros">Comece agora</a>
      </HeaderContainer>
    </HeaderIMG>
  );
}

export default Header;