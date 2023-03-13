// src/CitySearch.js

import React, { Component } from 'react';
import { InfoAlert } from './Alert';


class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined  
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({showSuggestions:true}); //
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) { // renders user input and displays info alert if user input does not match suggestions
    this.setState({ 
      query: value, 
      infoText: 'We can not find the city you are looking for. Please try another city', 
    });
  } else {
    return this.setState({ // else renders user input and list of suggestions, no info alert needed
      query: value,
      suggestions,
      infoText:''
    });
  }
};


  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
      infoText:'' //check
    });
    this.props.updateEvents(suggestion);
  }

  render() {
    return (
      
      <div className="CitySearch">
        <h3>choose a city:</h3>
        <input
        type="text"
        className="city"
        value={this.state.query}
        onChange={this.handleInputChanged}
        onFocus={() => { this.setState({ showSuggestions: true }) }}
        />
        <ul className="suggestions" style={this.state.showSuggestions ? {}: { display: 'none' }}>
          {this.state.suggestions.map((suggestion) => (
            <li key={suggestion} onClick={() => this.handleItemClicked(suggestion)} >{suggestion}</li>
        ))}
        <li onClick={() => this.handleItemClicked("all")}>
            <b>See all cities</b>
        </li>
        </ul>
        <InfoAlert text={this.state.infoText} />
      </div>
    );
  }
}

export default CitySearch;