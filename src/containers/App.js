import React, {Component} from 'react';
import Searchbar from '../components/Searchbar';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import Error from '../components/ErrorHandle';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Robots: [],
      Searchfield: '',
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      return response.json(); //cevabın dönüşümü
    })
    .then((users) => {
      this.setState({Robots: users});
    })
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
    if (!this.state.Robots.length) {
      return <h1>Loading...</h1>
    }
    else {
      return (
        <div className = "tc">
          <h1 className = "ma4 light-yellow">ROBOFRIENDS</h1>
          <Searchbar search = {this.Search}/>
          <Scroll>
              <Error>
                <CardList Database={this.Filter()}/>
              </Error>
            </Scroll>
        </div>
      );
    }
  }
}

export default App;
