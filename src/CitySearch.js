// src/CitySearch.js

import React, { Component } from 'react';
import { InfoAlert } from './Alert';


class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined,
    infoText: ''
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
      infoText:'' 
    });
    this.props.updateEvents(suggestion, this.props.numberOfEvents);
  }

  handleBlur = () => { // suggestion list disappears if user clicks away from city search box
    this.setState({ showSuggestions: false });
  }

  render() {
    return (
      
      <div className="CitySearch">
        <div>
        <h3>choose a city:</h3>
        <input
        type="text"
        className="city"
        value={this.state.query}
        onChange={this.handleInputChanged}
        onFocus={() => { this.setState({ showSuggestions: true }) }}
        onBlur={this.handleBlur}
        />
        </div>
        <ul className="suggestions" style={this.state.showSuggestions ? {}: { display: 'none' }}>
          {this.state.suggestions.map((suggestion) => (
            <li key={suggestion} onMouseDown={() => this.handleItemClicked(suggestion)} >{suggestion}</li>
        ))}
        <li key="all" onMouseDown={() => this.handleItemClicked("all")}>
            <b>See all cities</b>
        </li>
        </ul>
        <InfoAlert text={this.state.infoText} />
      </div>
    );
  }
}

export default CitySearch;