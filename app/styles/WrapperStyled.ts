import styled from "styled-components";

export default styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: radial-gradient(circle at 10% 20%, rgb(90, 92, 106) 0%, rgb(32, 45, 58) 81.3%);

  @media (max-width: 1110px) {
    flex-direction: column;
  }
`;

interface CenterWrapperProps {
  position: 'flex-start' | 'center' | 'flex-end';
}

export const CenterWrapper = styled.div<CenterWrapperProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: ${(props) => props.position};
`;