import React from 'react';
import Frame from './Frame.jsx';

const Tally = (props) => {
  const {scores} = props;

  const bigBoard = {
    1: [scores[0], scores[1]],
    2: [scores[2], scores[3]],
    3: [scores[4], scores[5]],
    4: [scores[6], scores[7]],
    5: [scores[8], scores[9]],
    6: [scores[10], scores[11]],
    7: [scores[12], scores[13]],
    8: [scores[14], scores[15]],
    9: [scores[16], scores[17]],
    10: [scores[18], scores[19]],
  }

  const frameList = Object.keys(bigBoard).map(frameRound => {
    return (
      <Frame
      key={frameRound}
      score={bigBoard[frameRound]}
      id={frameRound}/>
    )
  })

  return (
    <div>
      ScoreBoard:
      {frameList}
    </div>
  )
}

export default Tally;