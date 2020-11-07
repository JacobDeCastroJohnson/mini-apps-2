import React from 'react';

class Score extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      pins: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      bowls: 0,
      turn: 2,
      strike: false,
      spare: false,
      pinsUp: 10,
      pinsHit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      frameTotal: 0,
      gameTotal: 0,
    }
    //THIS BINDING AREA
    this.handleClick = this.handleClick.bind(this);
    this.frameReset = this.frameReset.bind(this);
  }

  //frame Reset function
  frameReset() {
    this.setState({
      frameTotal: 0,
      strike: false,
      spare: false,
    })
  }

  handleClick(score) {

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
    }


  }
  render() {
    console.log(typeof this.state.pins[1])
    return(
      <div>
        Pick the total number of pins hit:
        {this.state.pins.map((pin, i) => (
          <span key={i}>
            <button className="button" onClick={() => this.handleClick(i)}>{pin}</button>
          </span>
        ))}
        <div> Frame Total: {this.state.frameTotal}</div>
        <div> Game Total: {this.state.gameTotal}</div>
      </div>
    )
  }
}

export default Score;
