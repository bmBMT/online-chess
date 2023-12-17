import styled from "styled-components";
import { Colors } from "../models/Colors";

interface CellStyledProps {
  color: Colors;
  selected: boolean;
  available: boolean;
  haveFigure: boolean;
}

export default styled.div<CellStyledProps>`
  width: 12.5%;
  height: calc(100vw * 0.125);
  max-height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => !!props.onClick && props.haveFigure ? 'pointer' : 'default'};
  user-select: none;

  img {
    width: 100%;
    height: 100%;
  }

  background-color: ${(props) =>
    props.selected ? "brown" :
    props.available ? "rgb(253 245 137)" :
    props.color === "black" ? "#637793" : "#A1A9BB"
  };
`;