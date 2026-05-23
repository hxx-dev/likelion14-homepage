import styled from "styled-components";
import titleUrl from "../../assets/images/titleimage.svg";
import Button from "./Button";

const SectionContainer = styled.div`
  margin-top: 76px;
  margin-bottom: 127px;
`;

const ImageBox = styled.div`
  display: flex;
  padding-left: 85px;
  padding-bottom: 17px;
`;
const TextBox = styled.div`
  display: flex;
  padding-left: 85px;
  padding-bottom: 52px;
  color: #1a1a1a;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 500;
  word-wrap: break-word;
`;

const BtnGroup = styled.div`
  display: flex;
  padding-left: 85px;
  padding-bottom: 45px;
  gap: 18px;
`;

const Divider = styled.hr`
  border: 1px #1a1a1a solid;
  width: auto;
  justify-content: center;
  margin-left: 70px;
  margin-right: 70px;
`;

export default function TopSection({ selectedGen, onSelect }) {
  const Text = "서경대학교 멋쟁이사자처럼의 구성원들을 살펴보세요.";
  const generations = [14, 13, 12, 11];

  return (
    <div>
      <SectionContainer>
        <ImageBox>
          <img src={titleUrl} alt="구성원" />
        </ImageBox>
        <TextBox>{Text}</TextBox>
        <BtnGroup>
          {generations.map((gen) => (
            <Button
              key={gen}
              buttonName={`${gen}기`}
              onClick={() => onSelect(gen)}
              isSelected={selectedGen === gen}
            />
          ))}
        </BtnGroup>
        <Divider></Divider>
      </SectionContainer>
    </div>
  );
}
