import styled from "styled-components";

// 카드 전체 박스 - 너비 고정, 테두리, 세로 방향 정렬
const Card = styled.div`
  width: 280px;
  border: 3px solid #1a1a1a;
  display: flex;
  flex-direction: column;
`;

// 프로필 이미지
const CardImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  background: #eee;
`;
const TextBox = styled.div`
  padding: 18px 24px;
  gap: 9px;
  background-color: #f8fbe7;
  border-top: 3px solid #1a1a1a;

`;
// 이름
const CardName = styled.p`
  color: #1a1a1a;
  font-size: 22px;
  font-family: Pretendard;
  font-weight: 700;
  word-wrap: break-word;
`;

// 학과, 학번 (동일 스타일)
const CardInfo = styled.p`
  color: #1a1a1a;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 500;
  word-wrap: break-word;
`;

export default function InfoBox({ name, department, studentId, image }) {
  return (
    <Card>
      <CardImage src={image} alt={name} />
      <TextBox>
        <CardName>{name}</CardName>
        <CardInfo>{department}</CardInfo>
        <CardInfo>{studentId}</CardInfo>
      </TextBox>
    </Card>
  );
}
