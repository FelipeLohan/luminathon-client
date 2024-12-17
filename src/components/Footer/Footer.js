import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import linkedin from "./images/linkedin.png";
import styled from "styled-components";

const FooterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: #C3A289;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

function Footer() {
  return (
    <>
      <section>
        <FooterContainer>
          <ImgContainer>
            <img src={instagram} />
            <img src={linkedin} />
            <img src={facebook} />
          </ImgContainer>
        </FooterContainer>
      </section>
    </>
  );
}

export default Footer;
