import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateNumberOfEvents={() => {}} updateEvents={() => {}}/>); 
    });

    // test 1: checks the basic component is rendered
    test("renders the component", () => {
        expect(NumberOfEventsWrapper).toBeDefined();
    });

    // test 2: the default number of events shown is 32
    test('user sees 32 events by default', () => {
        expect(NumberOfEventsWrapper.find('input.number').prop('type')).toBe('number');
        expect(NumberOfEventsWrapper.state('number')).toBe(32);
    })

    // test 3: the input function is rendered correctly
    test('renders input correctly', () => {
        const number = NumberOfEventsWrapper.state('number');
        expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(number);
    });

    // test 4: the component changes state when user inputs value (10)
    test('change state when user input changes', () => {
        expect(NumberOfEventsWrapper.state('number')).toBe(32);
        NumberOfEventsWrapper.find('input.number').simulate('change', {
        target: { value: 12 },
        });
        expect(NumberOfEventsWrapper.state('number')).toBe(12);
    });

    /* // test 5: the results of the user input is rendered correctly --take out?
    test('rendered number of events is equal to the users input', () => {
        const RenderedNumberOfEvents = shallow(
            <NumberOfEvents number={10} updateEvents={() => { }} /> //was updateNumberOfEvents
        );
        expect(RenderedNumberOfEvents.state('number')).toBe(10);
    }); */

});



    