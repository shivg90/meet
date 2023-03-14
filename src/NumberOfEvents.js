import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
        state = {
        number: 32,
        errorText: ""
    }

    handleNumberChange = (event) => {
        let inputValue = event.target.value;
        this.props.updateEvents(null, inputValue);
        this.setState({ number: inputValue }); 
        if (inputValue < 1 || inputValue > 32) {
            this.setState({ errorText: 'Select number from 1 to 32' });
        } else {
            return this.setState({ errorText: '' });
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
                />
                <ErrorAlert text={this.state.errorText} />
            </div>
        );
    }
}

export default NumberOfEvents;
