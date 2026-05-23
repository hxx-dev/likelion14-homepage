import footerUrl from "../../assets/images/footerimage.svg";
import skonUrl from "../../assets/images/skonimage.svg";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 32px 32px;
`;

export default function Footer() {
  return (
    <div>
      <FooterContainer>
        <img src={footerUrl} alt="Footer" />
        <img src={skonUrl} alt="Skon" />
      </FooterContainer>
    </div>
  );
}
