import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './Chart';
import Car from './Car.png'
import Tree from './Tree.png'
import './App.css';



const user = {
  "customer": {
    "id": "A29071",
    "name": "Julia Simpson"
  },
  "energyUse": {
    "currentYear": 573,
    "priorYear": 791
  }
};




var energySaved = user.energyUse.priorYear - user.energyUse.currentYear;


class App extends React.Component {
  state={
    on: true,
  }
  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }
  // React requires render
  render() {
    let cars =[];
    for (let i=0; i<6; i++){
      cars.push(<img className={`garage`} src={Car} key={i} />)
    }
    let trees =[];
    for (let i=0; i<12; i++){
      trees.push(<img className={`tree`} src={Tree} key={i} />)
    }    
    return (
      <div className={`ui container`}>
        <h5>Your January Electricity Savings (ID: {user.customer.id}) </h5>
        <h2>
          Great job, {user.customer.name}!<br />
          Last month, you saved <b>{energySaved}kWh</b> to 
          {this.state.on && 
          <span> take <b>6 CARS</b> off the road!</span> 
          }
          {!this.state.on && 
          <span> stop <b>12 TREES</b> being cut!</span> 
          }
        </h2>
        <p>You used <span>{user.energyUse.currentYear}kWh</span> in January, compared to {user.energyUse.priorYear} in the same month last year. The resulting saving is enough to offset the energy consumption of six average cars for one month</p>
        <div className={`wrapper`}>
          <div className={`column medium-4 large-3`}>
            <Chart />
            <h4>{energySaved} kWh Saved</h4>
          </div>
          <div className={`column medium-2 centercenter`}>
            <div className="equal">
            ≈
            </div>      
          </div>
          {this.state.on && 
          <div className={`column medium-4`}>          
            <div className={`cars`}>{cars}</div>
            <h4>6 average sized cars</h4>
          </div>}
          {!this.state.on && 
          <div className={`column medium-6`}>
            <div className={`trees`}>{trees}</div>      
            <h4>12 average sized trees</h4>
          </div>}
        </div>
        <div className={`ui stackable grid`} style={{"margin-top":"10px"}}> 
        </div>
        <div>
          <button className={`ui basic button`} onClick={this.toggle}>
          {this.state.on && 
            <span><img className={`tree`} src={Tree} />Number of trees you've saved</span>
          }
          {!this.state.on &&
            <span><img className={`garage`} src={Car} />Number of cars off the road</span>         
          }
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);