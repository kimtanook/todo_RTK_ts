import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const boxFade = keyframes`
  50% { // 50% -> 정해둔 초의 50%가 지났을 때 중괄호 안의 코드를 실행
    opacity: 50%; // 불투명도
  }
`;

const HeaderStyle = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & {
    animation: ${boxFade} 1s step-end infinite; // ease-in-out infinite : 무한 alternate
  }
`;

const DateStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Header() {
  // 시계
  const [time, setTime] = useState(
    new Date(Date.now() + 9 * 60 * 60 * 1000).toLocaleString('ko-KR', {
      timeZone: 'UTC',
    })
  );

  useEffect(() => {
    const id = setInterval(() => {
      setTime(
        new Date(Date.now() + 9 * 60 * 60 * 1000).toLocaleString('ko-KR', {
          timeZone: 'UTC',
        })
      );
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <HeaderStyle>My ToDo </HeaderStyle>
      <DateStyle>{time}</DateStyle>
    </div>
  );
}
export default Header;
