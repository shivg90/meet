import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateNumberOfEvents={() => {}}/>);
    });

    // test 1: checks the basic component is rendered
    test("renders the component", () => {
        expect(NumberOfEventsWrapper).toBeDefined();
    });

    // test 2: the default number of events shown is 32
    test('user sees 32 events by default', () => {
        expect(NumberOfEventsWrapper.state('number')).toBe(32);
    })

    // test 3: the input function is rendered correctly
    test('renders input correctly', () => {
        const number = NumberOfEventsWrapper.state('number');
        expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(number);
    });

    // test 4: the component changes state when user inputs value (10)
    test('change state when user input changes', () => {
        NumberOfEventsWrapper.setState({
            number: '32'
        });
        const eventNumber = { target: { value: '10' } };
        NumberOfEventsWrapper.find('.number').simulate('change', eventNumber);
        expect(NumberOfEventsWrapper.state('number')).toBe('10');
    });

    // test 5: the results of the user input is rendered correctly
    test('rendered number of events is equal to the users input', () => {
        const RenderedNumberOfEvents = shallow(
            <NumberOfEvents number={10} updateNumberOfEvents={() => { }} />
        );
        expect(RenderedNumberOfEvents.state('number')).toBe(10);
    });

});



    