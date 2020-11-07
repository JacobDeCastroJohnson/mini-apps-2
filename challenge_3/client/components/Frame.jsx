import React from 'react';
import styled from 'styled-components';

const FrameWrap = styled.div`
  border-color: black;
`;

const Frame = () => {
  //Table Insert for Each Round of the game per user
  return (
    <FrameWrap className="frame">
      <span>5</span>
      <span>4</span>
      <p>9</p>
  </FrameWrap>
  )
}

export default Frame;