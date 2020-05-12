import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
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

  componentDidUpdate(props, state){
    if(this.state.count > 10 && this.state.count != state.count && !this.state.overTen) {
      console.log("updating over 10");
      this.setState({overTen: true});
    }
  }

  render() {
    let {count} = this.state;
    return (
      <div>
        <Hello name={this.state.name} />
        {(this.state.overTen) ? 
          <h3>Beat high score of 10</h3>
          :null
        }
        <p>You clicked the button {count} times</p>
        <button onClick={() => this.handleclick()}>click </button>
        <div>
          <h1>Hello</h1>
        </div>
               
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
