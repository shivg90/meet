import React, { Component } from "react";

class NumberOfEvents extends Component {
        state = {
        number: 32 //change to eventCount?
    }

    handleNumberChange = (event) => {
        let inputValue = event.target.value;
        this.props.updateEvents(null, inputValue);
        this.setState({ number: inputValue }); //change to eventCount?
    }
 
    render() {
        return (
            <div className="NumberOfEvents">
                <input
                    id="number-of-events"
                    type="number"
                    className="number"
                    value={this.state.number} //change to eventCount?
                    onChange={this.handleNumberChange}  
                />
            </div>
        );
    }
}

export default NumberOfEvents;
