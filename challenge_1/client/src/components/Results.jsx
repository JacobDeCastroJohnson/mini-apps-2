import React from 'react';
import ResultsItem from './ResultsItem.jsx';

const Results = (props) => {
// console.log(props);
  const { historicalLog } = props;
  // console.log(historicalLog);


  return (
    // <h3> Test from Results Level </h3>
    <ul>
      {historicalLog.map((item, index) => {
        return (
          <ResultsItem
            item = {item}
            key={index}
          />
        )
      })}
    </ul>
  )
}

export default Results