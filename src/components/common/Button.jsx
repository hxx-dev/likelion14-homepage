import styled from "styled-components";

const ButtonBox = styled.div`
  padding: 8px 26px;
  border: ${({ $isSelected }) => ($isSelected ? "2px solid #1a1a1a;" : "1px solid #1a1a1a;")};
  background: ${({ $isSelected }) => ($isSelected ? "#C6E400" : "#fff")};
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 500;
  cursor: pointer;
  display: flex;
`;

const Button = ({ buttonName, onClick, isSelected }) => (
  <ButtonBox onClick={onClick} $isSelected={isSelected}>
    {buttonName}
  </ButtonBox>
);

export default Button;
