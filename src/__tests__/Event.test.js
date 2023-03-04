import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

describe('<Event /> componenent', () => {
    let EventWrapper;
    const event = mockData[0];
    beforeAll(() => {
        EventWrapper = shallow(<Event event={event} />);
    })

    // test 1: renders the event component
    test('renders the component', () => {
        expect(EventWrapper).toBeDefined();
    });

    // test 2: renders the h2 summary correctly
    test('summary is rendered correctly in a h2 tag', () => {
        const summary = EventWrapper.find('h2.summary');
        expect(summary).toHaveLength(1);
        expect(summary.text()).toBe(event.summary);
    });

    // test 3: checks the start time of location is rendered
    test('event start time is rendered correctly', () => {
        const eventStart = EventWrapper.find('p.event-start');
        expect(eventStart).toHaveLength(1);
        expect(eventStart.text()).toBe(new Date(event.start.dateTime).toString());
      });

    // test 4: checks the location is rendered
    test('event location is rendered correctly', () => {
        const eventLocation = EventWrapper.find('p.event-location');
        expect(eventLocation).toHaveLength(1);
        expect(eventLocation.text()).toBe(`@${event.summary} | ${event.location}`);
       
      });


    // Test 5: checks the button is collapsed by default
    test('renders collapsed by default', () => {
        expect(EventWrapper.state("collapsed")).toBe(true);
    });

    // test 7: renders collapsed view
    test('the collapsed view is rendered correctly', () => {
        expect(EventWrapper.find('h3.about')).toHaveLength(0);
        expect(EventWrapper.find('a.link')).toHaveLength(0);
        expect(EventWrapper.find('p.description')).toHaveLength(0);
    });

    // test 8: user can view event details when clicking button
    test('user can expand an event when clicking show details button', () => {
        const detailsButton = EventWrapper.find('button.details-btn');
        expect(detailsButton.text()).toBe('show details');
        detailsButton.simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(false);
    })

    // test 9: renders expanded view
    test('event details is expanded and rendered correctly', () => {
        expect(EventWrapper.find('h3.about')).toHaveLength(1);
        expect(EventWrapper.find('a.link')).toHaveLength(1);
        expect(EventWrapper.find('p.description')).toHaveLength(1);
    
    });

    // test 10: user can not view event details when clicking button
    test('user can collapse an event when clicking hide details button', () => {
        const detailsButton = EventWrapper.find('button.details-btn');
        expect(detailsButton.text()).toBe('hide details');
        detailsButton.simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(true);
    })

});
