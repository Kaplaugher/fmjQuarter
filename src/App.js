import React, { Component } from 'react';
import Navbar1 from './components/navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar1 />
        {this.props.children}
      </div>
    );
  }
}

export default App;
