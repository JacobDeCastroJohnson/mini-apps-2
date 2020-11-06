import React from 'react';
import Graph from './Graph.jsx';

const List = (props) => {
  const { bpi } = props;
  console.log(props)

  //Extract API dataset keys and valyes
  const date = Object.keys(bpi);
  const price = Object.values(bpi);

  return (
    <div>
      <Graph date={date} price={price} />
    </div>
  )
}

export default List;