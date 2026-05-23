import { useState, useMemo } from "react";
import TopSection from "../components/common/TopSection";
import InfoBox from "../components/common/InfoBox";
import dummyData from "../data/dummyData";
import styled from "styled-components";

const Container = styled.div`
  padding-left: 85px;
  padding-right: 85px;
`;

// "운영진" 제목 - 위아래 간격 추가
const SectionTitle = styled.p`
  color: #1a1a1a;
  font-size: 30px;
  font-family: Pretendard;
  font-weight: 700;
  word-wrap: break-word;
  margin-bottom: 40px;
`;

// 대표, 부대표를 가로로 묶는 영역
const TopTrackGroup = styled.div`
  display: flex;
  gap: 22px;
  margin-bottom: 32px;
`;

//트랙 제목
const TrackTitle = styled.p`
  color: #1a1a1a;
  font-size: 24px;
  font-family: Pretendard;
  font-weight: 600;
  word-wrap: break-word;
  margin-top: 24px;
  margin-bottom: 12px;
`;

// 카드들을 가로로 나열하는 영역
const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 32px;
`;

export default function Members() {
  const [selectedGen, setSelectedGen] = useState(14);
  const data = useMemo(
    () => JSON.parse(JSON.stringify(dummyData[selectedGen])),
    [selectedGen],
  );

  return (
    <>
      <TopSection selectedGen={selectedGen} onSelect={setSelectedGen} />
      <Container>
        <SectionTitle>운영진</SectionTitle>

        {/* 대표, 부대표 가로로 배치 */}
        <TopTrackGroup>
          {["대표", "부대표"].map((track) => (
            <div key={track}>
              <TrackTitle>{track}</TrackTitle>
              <CardGroup>
                {data.운영진[track].map((member, index) => (
                  <InfoBox
                    key={index}
                    name={member.name}
                    department={member.department}
                    studentId={member.studentId}
                    image={member.image}
                  />
                ))}
              </CardGroup>
            </div>
          ))}
        </TopTrackGroup>

        {/* PO, FRONTEND, BACKEND */}
        {Object.entries(data.운영진)
          .filter(([track]) => track !== "대표" && track !== "부대표")
          .map(([track, members]) => (
            <div key={track}>
              <TrackTitle>{track}</TrackTitle>
              <CardGroup>
                {members.map((member, index) => (
                  <InfoBox
                    key={index}
                    name={member.name}
                    department={member.department}
                    studentId={member.studentId}
                    image={member.image}
                  />
                ))}
              </CardGroup>
            </div>
          ))}
      </Container>

      <Container>
        <br></br><br></br><br></br><br></br>
        <SectionTitle>아기사자</SectionTitle>
        {Object.entries(data.아기사자).map(([track, members]) => (
          <div key={track}>
            <TrackTitle>{track}</TrackTitle>
            <CardGroup>
              {members.map((member, index) => (
                <InfoBox
                  key={index}
                  name={member.name}
                  department={member.department}
                  studentId={member.studentId}
                  image={member.image}
                />
              ))}
            </CardGroup>
          </div>
        ))}
      </Container>
    </>
  );
}
