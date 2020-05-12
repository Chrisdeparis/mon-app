import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import HighScore from './HighScore';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props );
    this.state = {
      name: 'React',
      count: 0,
      overTen: false
      
    };
  }

  handleclick = () => {
    this.setState({count: this.state.count +1});
  }

  resetCount = (e) => {
    this.setState({
      count: 0,
      overTen:false
    })
  }

  componentDidUpdate(props, state){
    if(this.state.count > 10 && this.state.count != state.count && !this.state.overTen) {
      console.log("updating over 10");
      this.setState({overTen: true});
    }
  }

  render() {
    let {count} = this.state;
    return (
      <div className="box">
        
        
        <HighScore
          overTen={this.state.overTen}
          onReset={this.resetCount}
        />
        <p>You clicked the button {count} times</p>
        
        <button onClick={() => this.handleclick()}>Click me</button>
        
               
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
