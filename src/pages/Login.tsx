/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import styled from '@emotion/styled';
import { Spacer } from '../components/common/Spacer';
import { useNavigate } from 'react-router';
import logo from '/assets/images/dummy logo.png';
import backgroundImg from '/assets/images/login bg.png';
import { useSetRecoilState } from 'recoil';
import { userAtom } from '../recoil/atoms/userAtom';
import { useEffect } from 'react';
import { loginUserApi } from '../api/userApi';

//test
const BackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  max-width: 500px;
  padding: 10px 10px;
  /* padding-bottom: 50px; */
  /* background-color: ${({ theme }) => theme.colors.background}; */
  box-sizing: border-box;
  border-radius: 12px; /* 모서리를 둥글게 설정 */
  transform: translateY(-20px); /* 컨테이너 전체를 위로 올림 */
`;


const StartButton = styled.button`
  width: 600px;
  height: 100px;
  padding: 36px 150px;
  display: flex;
  background-color: white;
  color: #267dff;
  font-size: 3.5rem;
  font-weight: bold;
  border: 8px solid #1e6de6	;
  border-radius: 18px;
  cursor: pointer;
  transition: 0.3s ease;

   &:hover {
     background-color: #e6f0ff;
   }
`;

const TopBar = styled.div`
  position: absolute;
  top: 20px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 1.5rem;
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 260px;
  background-color: white;
  border: 5px solid #1e6de6	;
  border-radius: 16px;
  margin-bottom: 20px;
  /* background-image: url('/assets/images/cam_profile.png'); */
  background-size: cover;
  background-position: center;
`;

const AvatarImg = styled.img`
  width: 80%;      // 👈 원하는 크기로 조절
  height: auto;
  object-fit: contain;
`;

const InputArea = styled.div`
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: center;
  margin-bottom: 20px;
  gap: px;
  /* margin-bottom: 30px; */
`;

const Label = styled.div`
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  white-space: pre-line;
  text-align: right;
  flex: 1;                         // ✅ 부모의 남는 높이 다 차지
  display: flex;                  // ✅ 자신을 flex 컨테이너로
  align-items: center;  
`;

const Input = styled.input`
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 8px;
  background-color: white;
  border: 5px solid #1e6de6	;
  border-radius: 18px;
  outline: none;
`;

const Login = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userAtom);
  // const { fetchUser } = useFetchUser();

  const handleStart = () => {
    navigate('/meeting/1', {
      state: {
        userId: 1,
        teamId: 1,
        nickname: name || 'guest',
      },
    });
  };

  return (
    <BackgroundWrapper>
      <TopBar>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="/assets/images/icns.png" alt="ICNS" width={24} height={24} />
          <span>ICNS LAB</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="/assets/images/ccrc.png" alt="CCRC" width={24} height={24} />
          <span>CCRC</span>
        </div>
        </TopBar>
      <Container>
        <Avatar>
          <AvatarImg src="/assets/images/cam_profile.png" alt="avatar" />
        </Avatar>
          <InputArea>
            <Label>{"What's\nyour\nname?"}</Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputArea>
        
      </Container>
      <StartButton onClick={handleStart}>Start AI Health Care</StartButton>
    </BackgroundWrapper>
  );
};

export default Login;
