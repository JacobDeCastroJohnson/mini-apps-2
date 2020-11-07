import React from 'react';
import styled from 'styled-components';

const FrameWrap = styled.h3`
  border-color: black;
  display: flex;
`;
const ScoreValWrap = styled.span`
  border: 2px solid;
  background-color: pink;
`;

const Frame = (props) => {
  //Table Insert for Each Round of the game per user
let S1 = 0;
if (props.score) {
  S1 = props.score[0];
}

let S2 = 0;
if (props.score) {
  S2 = props.score[1];
}

let comment = '';
if ((S1 + S2) === 10) {
  comment = 'STRIKE!';
} else {
  comment = 'Great Bowl!'
}

  return (
    <FrameWrap className="frame">
    Frame {props.id}:
    <ScoreValWrap> {S1} | {S2}</ScoreValWrap>
      {/* <span>{S1}</span>
      <span>{S2}</span>
      <p>{{S1} + {S2}} </p> */}
  </FrameWrap>
  )
}

export default Frame;