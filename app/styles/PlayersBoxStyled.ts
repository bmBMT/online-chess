import styled from "styled-components";

export default styled.div`
  position: relative;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background: #00000050;
  width: 300px;
  height: calc((100vw * 0.125) * 8);
  max-height: calc(64px * 8);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #a1a9bb;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #00000038;
    top: 50%;
    left: 0;
  }

  @media (max-width: 1110px) {
    flex-direction: row;
    width: 100%;
    height: calc((100vh - (64px * 8)) - 10px);
    max-height: 195px;
    border-radius: 0;

    &::after {
      width: 1px;
      height: 100%;
      top: 0;
      left: 50%;
    }
  }

  @media (min-height: 1000px) AND (max-width: 1110px) {
    height: calc(((100vh - (64px * 8)) / 2) - 10px);
    max-height: 300px;
  }

  @media (max-height: 550px) AND (max-width: 1110px) {
    display: none;
  }
`;

export const PlayerWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const PlayerStyled = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  padding: 16px 16px 0;
`;

export const LostFogiresStyled = styled.div`
  height: 100%;

  img {
    width: 50px;
    height: 50px;

    @media (max-width: 1200px) {
      width: calc((100vw / 2) / 6);
      height: calc((100vw / 2) / 6);
    }
  }
`;
