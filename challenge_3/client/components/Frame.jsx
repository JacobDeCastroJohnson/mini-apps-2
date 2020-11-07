import React from 'react';
import styled from 'styled-components';

const FrameWrap = styled.h3`
  border-color: black;
  display: flex;
`;
const ScoreValWrap = styled.span`
  border: 2px solid;
  padding-left: 25px;
  padding-right: 25px;
  background-color: pink;
  margin-left: 10px;
`;

const TotalFrameWrap = styled.span`
  border: 2px solid;
  background-color: lightgreen;
  padding-left: 25px;
  padding-right: 25px;
`;

const CommentWrap = styled.div`
  margin-top: 2px;
  padding-left: 15px;
`;

const Frame = (props) => {
  console.log(props);
  //Table Insert for Each Round of the game per user
let S1 = 0;
let S2 = 0;
if (props.score) {
  S1 = props.score[0];
  S2 = props.score[1];
}

let strikeComment = undefined;
let spareComment = undefined;
let frameCheck = S1 + S2;

if (S1 === 10) {
  strikeComment = 'STRIKE!'
}

if (frameCheck === 10 && S1 !== 10) {
  spareComment = 'SPARE!'
}

  return (
    <FrameWrap className="frame">
    Frame {props.id}:
    <ScoreValWrap> {S1} | {S2}</ScoreValWrap>
    {frameCheck ? <TotalFrameWrap> {frameCheck} </TotalFrameWrap> : null}
    {strikeComment ? <CommentWrap> {strikeComment} </CommentWrap> : null}
    {spareComment ? <CommentWrap> {spareComment} </CommentWrap> : null}
  </FrameWrap>
  )
}

export default Frame;