import React from 'react';

const ResultsItem = (props) => {
  // console.log(props);
  const {item } = props;
  console.log(item)

  return (
    <li>
      <span>
        {item.date} {' | '}
        {item.description} {' | '}
        {item.lang} {' | '}
        {item.category1} {' | '}
        {item.category2} {' | '}
        {item.granularity} {' | '}
      </span>
    </li>
  )
}

export default ResultsItem;
