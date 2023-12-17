import { FC, useEffect, useRef, useState } from "react";
import { Player } from "../models/Player"
import { CenterWrapper } from "../styles/WrapperStyled";
import TimerStyled from "../styles/TimerStyled";
import moment from "moment";
import { Colors } from "../models/Colors";
import { useTimer } from "react-timer-hook";

interface ITimer {
  currentPlayer: Player | null;
}

const Timer: FC<ITimer> = ({ currentPlayer }) => {
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 300);
  const { totalSeconds: blackTime, pause: blackPause, resume: blackResume } = useTimer({ expiryTimestamp, onExpire: () => console.log('Expire black') });
  const { totalSeconds: whiteTime, pause: whitePause, resume: whiteResume } = useTimer({ expiryTimestamp, onExpire: () => console.log('Expire white') });

  useEffect(() => {
    blackPause();
    whitePause();

    switch (currentPlayer?.color) {
      case Colors.BLACK:
        blackResume();
        break;
    
      case Colors.WHITE:
        whiteResume();
        break;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPlayer]);

  return (
    <CenterWrapper position="flex-start">
      <TimerStyled>
        <div>
          <div>Черные</div>
          <div>{moment.utc(blackTime * 1000).format('mm:ss')}</div>
        </div>
        <div>
          <div>Белые</div>
          <div>{moment.utc(whiteTime * 1000).format('mm:ss')}</div>
        </div>
      </TimerStyled>
    </CenterWrapper>
  )
}

export default Timer
