import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
        state = {
        number: 32,
        errorText: ""
    }

    handleNumberChange = (event) => {
        const minValue = 0; // new
        const maxValue = 32; // new
        let inputValue = event.target.value;
        inputValue = Math.max(Number(minValue), Math.min(Number(maxValue), Number(inputValue))); // new
        this.setState({ number: inputValue }); 
        if (inputValue < 1 || inputValue > 32) {
            this.setState({ errorText: 'Select number from 1 to 32' });
            this.props.updateEvents(null, []);
        } else {
            this.setState({ errorText: '' });
            this.props.updateEvents(null, inputValue);
        }
    };
 
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
                    min="0"
                />
                <ErrorAlert text={this.state.errorText} />
            </div>
        );
    }
}

export default NumberOfEvents;
