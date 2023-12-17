import { FC } from "react"
import { Cell } from "../models/Cell"
import Image from "next/image"
import CellStyled from "../styles/CellStyled";
import AvailableStyled from "../styles/AvailableStyled";

interface CellProps {
  cell: Cell
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
  return (
    <CellStyled
      haveFigure={!!cell.figure}
      color={cell.color}
      selected={selected}
      available={cell.available && !!cell.figure}
      onClick={() => click(cell)}
    >
      {!cell.figure && cell.available && <AvailableStyled />}
      {cell.figure?.logo && <Image src={cell.figure.logo} alt="" />}
    </CellStyled>
  )
}

export default CellComponent
