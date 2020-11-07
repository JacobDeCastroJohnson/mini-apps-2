import React from 'react';
import Tally from './Tally.jsx';

class Score extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      pins: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      turn: 1,
      frameTotal: 0,
      gameTotal: 0,
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

        })
      }

      //If Strike on first Roll
      if (score === 10) {
        let newScore = this.state.scores;
        newScore.push(10,0);
        this.setState({
          turn: this.state.turn + 1,
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
        })
      }
    }
  }


  render() {
    console.log(typeof this.state.pins[1])
    return(
      <div>
        Pick the total number of pins hit:
        {this.state.pins.map((pin, i) => (
          <span key={i}>
            <button className="button" onClick={() => this.handleClick(pin)}>{pin}</button>
          </span>
        ))}
        <h3> Turn: {this.state.turn} </h3>
        <Tally scores={this.state.scores} />
      </div>
    )
  }
}

export default Score;


/*


 // this.setState({
    //   frameTotal: this.state.frameTotal += score,
    //   gameTotal: this.state.gameTotal += score,
    // })

    //Bowl a strike
    if (this.state.bowls === 0 && score === 10) {
      this.setState({
        frameTotal: this.state.frameTotal += score,
        gameTotal: this.state.gameTotal += score,
        strike: true,
        bowls: this.state.bowls+1,
      })
    } else {
      // Bowl a second turn on same frame
      this.setState({
        frameTotal: this.state.frameTotal += score,
        gameTotal: this.state.gameTotal += score,
        pins: this.state.pins.slice(0, 10 - score),
      })
    }*/