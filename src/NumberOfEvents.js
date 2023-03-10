import React, { Component } from "react";

class NumberOfEvents extends Component {
        state = {
        number: 32 
    }

    handleNumberChange = (event) => {
        let inputValue = event.target.value;
        this.props.updateEvents(null, inputValue);
        this.setState({ number: inputValue }); 
    }
 
    render() {
        return (
            <div className="NumberOfEvents">
                <h3>number of events:</h3>
                <input
                    id="number-of-events"
                    type="number"
                    className="number"
                    value={this.state.number} 
                    onChange={this.handleNumberChange}  
                />
            </div>
        );
    }
}

export default NumberOfEvents;
