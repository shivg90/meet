import React, { Component } from "react";

class NumberOfEvents extends Component {
        state = {
        number: this.props.number || 32
    }

    handleNumberChange = (event) => {
        const value = event.target.value;
        this.setState({ number: value });
        this.props.updateNumberOfEvents(value);
    }
 
    render() {
        return (
            <div className="NumberOfEvents">
                <input
                    className="number"
                    value={this.state.number}
                    onChange={this.handleNumberChange}
                />
            </div>
        );
    }
}

export default NumberOfEvents;
