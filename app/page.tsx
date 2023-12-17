"use client";

import { useEffect, useState } from "react";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";
import { Player } from "./models/Player";
import { Colors } from "./models/Colors";
import WrapperStyled, { CenterWrapper } from "./styles/WrapperStyled";
import PlayersBox from "./components/PlayersBox";
import Timer from "./components/Timer";

export default function Home() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, [whitePlayer]);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
  }

  return (
    <WrapperStyled>
      <Timer currentPlayer={currentPlayer} />
      <CenterWrapper position="center">
        <BoardComponent
          board={board}
          setBoard={setBoard}
          currentPlayer={currentPlayer}
          swapPlayer={swapPlayer}
        />
      </CenterWrapper>
      <PlayersBox
        lostBlackFigures={board.lostBlackFigures}
        lostWhiteFigures={board.lostWhiteFigures}
        currentPlayer={currentPlayer}
      />
    </WrapperStyled>
  )
}
