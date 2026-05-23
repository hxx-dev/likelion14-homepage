import profileImage from "../assets/images/profileimage.svg";

const defaultMember = {
  name: "김멋사",
  department: "소프트웨어학과",
  studentId: "23학번",
  image: profileImage,
};

const createMembers = (count) =>
  Array.from({ length: count }, () => ({ ...defaultMember }));

const dummyData = {
  14: {
    운영진: {
      대표: [
        {
          name: "윤희준",
          department: "소프트웨어학과",
          studentId: "20학번",
          image: profileImage,
        },
      ],
      부대표: [
        {
          name: "임다현",
          department: "소프트웨어학과",
          studentId: "23학번",
          image: profileImage,
        },
      ],
      PO: [
        {
          name: "정영진",
          department: "디자인학과 비주얼디자인전공",
          studentId: "20학번",
          image: profileImage,
        },
        {
          name: "최운조",
          department: "비주얼디자인전공",
          studentId: "22학번",
          image: profileImage,
        },
        {
          name: "임다현",
          department: "소프트웨어학과",
          studentId: "23학번",
          image: profileImage,
        },
        {
          name: "김정현",
          department: "아트엔테크놀로지학과",
          studentId: "23학번",
          image: profileImage,
        },
      ],
      FRONTEND: [
        {
          name: "심서현",
          department: "소프트웨어학과",
          studentId: "23학번",
          image: profileImage,
        },
        {
          name: "정목진",
          department: "소프트웨어학과",
          studentId: "22학번",
          image: profileImage,
        },
        {
          name: "김현수",
          department: "소프트웨어학과",
          studentId: "25학번",
          image: profileImage,
        },
      ],
      BACKEND: [
        {
          name: "금시언",
          department: "소프트웨어학과",
          studentId: "21학번",
          image: profileImage,
        },
        {
          name: "신채린",
          department: "소프트웨어학과",
          studentId: "23학번",
          image: profileImage,
        },
        {
          name: "김나경",
          department: "소프트웨어학과 공공인재학부",
          studentId: "22학번",
          image: profileImage,
        },
      ],
    },
    아기사자: {
      PO: [
        {
          name: "조재호",
          department: "미래융합학부 IT학점",
          studentId: "21학번",
          image: profileImage,
        },
        {
          name: "한슬기",
          department: "미래융합학부 IT학점",
          studentId: "25학번",
          image: profileImage,
        },
        {
          name: "박세은",
          department: "미래융합학부 IT학점",
          studentId: "25학번",
          image: profileImage,
        },
        {
          name: "구나영",
          department: "비주얼디자인학과",
          studentId: "24학번",
          image: profileImage,
        },
        {
          name: "임다영",
          department: "미래엔테크놀로지",
          studentId: "26학번",
          image: profileImage,
        },
        {
          name: "조민서",
          department: "미래융합학부",
          studentId: "26학번",
          image: profileImage,
        },
        {
          name: "강서연",
          department: "시각영상디자인전공",
          studentId: "22학번",
          image: profileImage,
        },
        {
          name: "이정민",
          department: "비주얼디자인학과",
          studentId: "23학번",
          image: profileImage,
        },
      ],
      FRONTEND: [
        {
          name: "최서연",
          department: "소프트웨어학과",
          studentId: "24학번",
          image: profileImage,
        },
        {
          name: "백윤관",
          department: "소프트웨어학과",
          studentId: "22학번",
          image: profileImage,
        },
        {
          name: "김서현",
          department: "소프트웨어학과",
          studentId: "24학번",
          image: profileImage,
        },
        {
          name: "김민솔",
          department: "소프트웨어학과",
          studentId: "22학번",
          image: profileImage,
        },
        {
          name: "김우현",
          department: "소프트웨어학과",
          studentId: "23학번",
          image: profileImage,
        },
        {
          name: "홍윤지",
          department: "소프트웨어학과",
          studentId: "23학번",
          image: profileImage,
        },
        {
          name: "한주은",
          department: "아동학과",
          studentId: "21학번",
          image: profileImage,
        },
        {
          name: "김승민",
          department: "소프트웨어학과",
          studentId: "22학번",
          image: profileImage,
        },
        {
          name: "양우석",
          department: "소프트웨어학과",
          studentId: "23학번",
          image: profileImage,
        },
        {
          name: "정시훈",
          department: "소프트웨어학과",
          studentId: "23학번",
          image: profileImage,
        },
        {
          name: "장서후",
          department: "소프트웨어학과",
          studentId: "22학번",
          image: profileImage,
        },
        {
          name: "양희창",
          department: "소프트웨어학과",
          studentId: "21학번",
          image: profileImage,
        },
        {
          name: "장경무",
          department: "전자컴퓨터공학과",
          studentId: "22학번",
          image: profileImage,
        },
        {
          name: "김윤정",
          department: "파이낸스엔테크학과",
          studentId: "25학번",
          image: profileImage,
        },
      ],
      BACKEND: [
        {
          name: "이주희",
          department: "전자컴퓨터학과",
          studentId: "23학번",
          image: profileImage,
        },
        {
          name: "최아원",
          department: "소프트웨어학과",
          studentId: "23학번",
          image: profileImage,
        },
        {
          name: "조민호",
          department: "소프트웨어학과",
          studentId: "24학번",
          image: profileImage,
        },
        {
          name: "오지우",
          department: "소프트웨어학과",
          studentId: "23학번",
          image: profileImage,
        },
        {
          name: "남궁강",
          department: "컴퓨터공학과",
          studentId: "20학번",
          image: profileImage,
        },
        {
          name: "이정능",
          department: "컴퓨터공학과",
          studentId: "22학번",
          image: profileImage,
        },
        {
          name: "최예윤",
          department: "컴퓨터공학과",
          studentId: "23학번",
          image: profileImage,
        },
        {
          name: "이충환",
          department: "컴퓨터공학과",
          studentId: "22학번",
          image: profileImage,
        },
        {
          name: "김민호",
          department: "컴퓨터공학과",
          studentId: "22학번",
          image: profileImage,
        },
        {
          name: "나영준",
          department: "소프트웨어학과",
          studentId: "21학번",
          image: profileImage,
        },
        {
          name: "김정모",
          department: "소프트웨어학과",
          studentId: "21학번",
          image: profileImage,
        },
        {
          name: "김태현",
          department: "소프트웨어학과",
          studentId: "23학번",
          image: profileImage,
        },
      ],
    },
  },
  13: {
    운영진: {
      대표: createMembers(1),
      부대표: createMembers(1),
      PO: createMembers(3),
      FRONTEND: createMembers(3),
      BACKEND: createMembers(3),
    },
    아기사자: {
      PO: createMembers(4),
      FRONTEND: createMembers(4),
      BACKEND: createMembers(4),
    },
  },
  12: {
    운영진: {
      대표: createMembers(1),
      부대표: createMembers(1),
      PO: createMembers(3),
      FRONTEND: createMembers(3),
      BACKEND: createMembers(3),
    },
    아기사자: {
      PO: createMembers(4),
      FRONTEND: createMembers(4),
      BACKEND: createMembers(4),
    },
  },
  11: {
    운영진: {
      대표: createMembers(1),
      부대표: createMembers(1),
      PO: createMembers(3),
      FRONTEND: createMembers(3),
      BACKEND: createMembers(3),
    },
    아기사자: {
      PO: createMembers(4),
      FRONTEND: createMembers(4),
      BACKEND: createMembers(4),
    },
  },
};

export default dummyData;
