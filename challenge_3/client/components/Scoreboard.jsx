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
      <h3>Score Card</h3>
      <ScoreHeader>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
      </ScoreHeader>
      <ScoreBoard>
        <Frame/>
        <Frame/>
        <Frame/>
        <Frame/>
        <Frame/>
        <Frame/>
        <Frame/>
        <Frame/>
        <Frame/>
        <Frame/>
      </ScoreBoard>
      <h1>Game Score = 133</h1>
      <br></br>
      <Score />
    </div>
  )
}

export default Scoreboard;