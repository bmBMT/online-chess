import { FC, Fragment, useEffect, useState } from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";
import BoardStyled from "../styles/BoardStyled";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard, currentPlayer, swapPlayer }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function click(cell: Cell) {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
      swapPlayer();
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell)
      }
    }
  }

  function highlightCells() {
    board.highlightCells(selectedCell);
    updateBoard();
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  useEffect(() => {
    highlightCells();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCell]);

  return (
    <BoardStyled>
      {board.cells.map((row, i) =>
        <Fragment key={i}>
          {row.map(cell =>
            <CellComponent
              click={click}
              cell={cell}
              key={cell.id}
              selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
            />
          )}
        </Fragment>
      )}
    </BoardStyled>
  )
}

export default BoardComponent
