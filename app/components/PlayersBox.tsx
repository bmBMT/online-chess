import { FC } from "react"
import PlayersBoxStyled, { LostFogiresStyled, PlayerStyled, PlayerWrapperStyled } from "../styles/PlayersBoxStyled";
import { Player } from "../models/Player";
import { FaCheck } from "react-icons/fa";
import { Figure } from "../models/figures/Figure";
import Image from "next/image";

interface ILostFigures {
  figures: Figure[];
}

interface IPlayerComponent {
  isPlayerMove: boolean;
  lostFigures: Figure[];
}

interface IPlayersBox {
  currentPlayer: Player | null;
  lostBlackFigures: Figure[];
  lostWhiteFigures: Figure[];
}
const LostFigures: FC<ILostFigures> = ({ figures }) => {
  return (
    <LostFogiresStyled>
      {figures.map(figure => (
        figure.logo && <Image key={figure.id} src={figure.logo} alt="" />
      ))}
    </LostFogiresStyled>
  );
}


const PlayerComponent: FC<IPlayerComponent> = ({ isPlayerMove, lostFigures }) => {
  return (
    <PlayerWrapperStyled>
      <PlayerStyled>
        <span>123</span> {isPlayerMove && <FaCheck />}
      </PlayerStyled>
      <LostFigures figures={lostFigures} />
    </PlayerWrapperStyled>
  );
}


const PlayersBox: FC<IPlayersBox> = ({ currentPlayer, lostBlackFigures, lostWhiteFigures }) => {
  return (
    <PlayersBoxStyled>
      <PlayerComponent
        lostFigures={lostBlackFigures}
        isPlayerMove={currentPlayer?.color === 'black'}
      />
      <PlayerComponent
        lostFigures={lostWhiteFigures}
        isPlayerMove={currentPlayer?.color === 'white'}
      />
    </PlayersBoxStyled>
  )
}

export default PlayersBox
