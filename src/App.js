import React, { Component } from "react";
import CardList from "./components/card_list/CardList";
import SearchBar from "./components/search_bar/SearchBar";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  onChange = e => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    // pull monsters & searchField set to const
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBar placeholder='Search monsters' onChange={this.onChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
