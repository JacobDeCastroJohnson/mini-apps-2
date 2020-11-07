import React from 'react';
import Tally from './Tally.jsx';
import styled from 'styled-components';

const PinButton = styled.button`
  padding: 15px;
    border-color: red;
    background-color: ghostwhite;
    font-weight: bold;
`;

class Score extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      pins: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      turn: 1,
      gameScore: 0,
      frame: true,

      scores: [],
    }
    //THIS BINDING AREA
    this.handleClick = this.handleClick.bind(this);
    this.frameReset = this.frameReset.bind(this);
  }

  //frame Reset function
  frameReset() {
    this.setState({
      pins: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    })
  }

  handleClick(score) {
    if (this.state.frame) {
      //Confirmed 1st roll of frame, toggle on execution
      this.state.frame = !this.state.frame;

      //if not Strike or Spare
      if (score < 10) {
        let newScore = this.state.scores;
        let sliceVal = score - 1;
        newScore.push(score);
        this.setState({
          turn: this.state.turn + 1,
          scores: newScore,
          pins: this.state.pins.slice(0, 10 - sliceVal),
          gameScore: this.state.gameScore + score,
        })
      }

      //If Strike on first Roll
      if (score === 10) {
        let newScore = this.state.scores;
        newScore.push(10,0);
        this.setState({
          turn: this.state.turn + 1,
          gameScore: this.state.gameScore + score,
        })
      }

    } else {
      // SECOND ROLL OF FRAME
      //Update Pin options
      this.frameReset();

      this.state.frame = !this.state.frame;
      let length = this.state.scores.length - 1;
      let preScore = this.state.scores[length];
      let leftPins = 10 - preScore;


      if (score <= leftPins) {
        let newScore = this.state.scores;
        newScore.push(score);
        this.setState({
          turn: this.state.turn + 1,
          scores: newScore,
          gameScore: this.state.gameScore + score,
        })
      }
    }
  }

  render() {
    console.log(typeof this.state.pins[1])
    return(
      <div>
        Knock em down:
        {this.state.pins.map((pin, i) => (
          <span key={i}>
            <PinButton className="PinButton" onClick={() => this.handleClick(pin)}>{pin}</PinButton>
          </span>
        ))}
        <h2> Turn: {this.state.turn} </h2>
        <Tally scores={this.state.scores}/>
        <h1> Total Game Score: {this.state.gameScore} </h1>
      </div>
    )
  }
}

export default Score;