import React from 'react';
import {Bar, Line} from "react-chartjs-2";

const Graph = (props) => {

  const colors = [];
  const borders = [];
  const colorMatch = () =>{
    for (var i = 0; i < props.date.length; i++) {
      colors.push('rgba(177, 251, 222, 0.5)');
      borders.push('rgba(255, 99, 132, 1)');
    }
    console.log(colors);
    return colors;
  }
  colorMatch();


   const  data = {
        labels: props.date,
        datasets: [{
            label: 'bitcoin price',
            data: props.price,
            backgroundColor: colors,
            borderColor: borders,
            borderWidth: 1
        }]
    }
    return (
      <div className="chart">
        <div>
          <h4> View: LINE </h4>
          <Line
            data={data}
            width={100}
            height={200}
            options={{ maintainAspectRatio: false }} />

        </div>
        <br></br>
      <div>
        <h4> View: BAR </h4>
        <Bar
           data={data}
           width={100}
           height={200}
           options={{ maintainAspectRatio: false }} />
      </div>
      </div>
    )
}
export default Graph;