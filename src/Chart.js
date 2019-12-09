import React, { Component } from 'react'
import {Bar, Line, Pie, HorizontalBar} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels:['2013', '2014'],
        datasets:[
          {
            label: 'Energy used in January',
            data:[
              791,
              573              
            ],
            backgroundColor:[
              '#eeeeee',
              '#5FA003'               
            ],
            borderColor:'#000000',
            borderWidth:2
          }
        ]
      }
    }
  }

  render() {
    return (
      <div className="chart">
        <HorizontalBar
          data={this.state.chartData}
          options={{
            legend: {
              display:false,
            },
            scales: {
              xAxes: [{
                ticks: {
                  beginAtZero: true,
                  display:false,
                },
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                },
            }],
            yAxes: [{
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                zeroLineColor: 'transparent'
                }
              }]            
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;