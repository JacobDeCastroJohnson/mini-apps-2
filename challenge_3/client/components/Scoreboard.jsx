import React from 'react';
import Frame from './Frame.jsx';
import styled from 'styled-components';
import Score from './Score.jsx';

const ScoreBoard = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: lightgrey;
  margin-left: 10%;
  margin-right: 10%;
  border: 3px solid;
`;

const ScoreHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: pink;
  margin-left: 10%;
  margin-right: 10%;
  border: 3px solid;
`;

const Scoreboard = () => {
  //Scoreboard Table for the Game
  return (
    <div className="scoreboard">
      <h2> Let's Play!</h2>
      <Score />
    </div>
  )
}

export default Scoreboard;