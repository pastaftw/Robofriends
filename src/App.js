import React, {Component} from 'react';
import {Database} from './Database';
import Searchbar from './Searchbar';
import CardList from './CardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Robots: Database,
      Searchfield: '',
    }
  }

  Search = (event) => {
    this.setState({Searchfield: event.target.value});
  }

  Filter = () => {
    return this.state.Robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
    })
  }

  render() {
    return (
      <div className = "tc">
        <h1 className = "white">Robofriends</h1>
        <Searchbar search = {this.Search}/>
        <CardList Database={this.Filter()}/>
      </div>
    );
  }
}

export default App;
