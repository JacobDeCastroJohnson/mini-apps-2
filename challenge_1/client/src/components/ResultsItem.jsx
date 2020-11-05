import React from 'react';
import styled from 'styled-components';

const Labels = styled.span`
  font-weight: bold;
`;

const ResultsItem = (props) => {
  // console.log(props);
  const {item } = props;
  // console.log(item)

  return (
    <div>
    <Labels> Date | Language | Category 1 | Category 2 | Granularity | Description </Labels>
      <li>
        <span>
          {item.date} {' | '}
          {item.lang} {' | '}
          {item.category1} {' | '}
          {item.category2} {' | '}
          {item.granularity} {' | '}
          {item.description} {' | '}
        </span>
      </li>
    <br></br>
    </div>
  )
}

export default ResultsItem;
