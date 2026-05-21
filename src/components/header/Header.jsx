import styled from "styled-components";
import logoUrl from "../../assets/icons/logoicon.svg";
import { useNavigate } from "react-router-dom";

const LogoImage = styled.img`
  width: 46px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px #1a1a1a solid;
`;

const HomeBtn = styled.div`
  color: #1a1a1a;
  font-size: 22px;
  font-family: Pretendard;
  font-weight: 700;
  display: flex;
  align-items: center;
  background: white;
  gap: 16px;
  padding: 14px 50px;
  &:hover {
    cursor: pointer;
  }
`;

const HeaderLeft = styled.div`
  align-items: center;
  border-right: 1px #1a1a1a solid;
`;

const HeaderRight = styled.div`
  align-items: center;
  border-left: 1px #1a1a1a solid;
  display: flex;
  padding-left: 56px;
`;

const NavBtn = styled.div`
  color: #1a1a1a;
  justify-content: space-between;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 600;
  display: flex;
  align-items: center;
  background: white;
  padding: 24px 56px 24px 0;
  &:hover {
    cursor: pointer;
  }
`;

const LoginBtn = styled.div`
  color: #1a1a1a;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 600;
  display: flex;
  padding: 24px 48px;
  justify-content: center;
  align-items: center;
  background: white;
  border-left: 1px #1a1a1a solid;
  &:hover {
    cursor: pointer;
  }
`;

const navItems = [
  { label: "지원하기", path: "/apply" },
  { label: "프로젝트", path: "/project" },
  { label: "구성원", path: "/" },
];

export default function Header() {
  const homename = "멋쟁이사자처럼 서경대학교";
  const navigate = useNavigate();

  return (
    <div>
      <HeaderContainer>
        <HeaderLeft>
          <HomeBtn onClick={() => navigate("/")}>
            <LogoImage src={logoUrl} alt="Logo" />
            {homename}
          </HomeBtn>
        </HeaderLeft>
         <HeaderRight>{/*왼쪽 패딩 값과 NavBtn의 오른쪽 패딩 값을 같게 줘서 간격 맞춤*/}
          {navItems.map((item) => (
            <NavBtn key={item.label} onClick={() => navigate(item.path)}>
              {item.label}
            </NavBtn>
          ))}
          <LoginBtn onClick={() => navigate("/login")}>
            로그인/회원가입
          </LoginBtn>
        </HeaderRight>
      </HeaderContainer>
    </div>
  );
}
