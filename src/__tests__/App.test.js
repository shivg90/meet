// src/__tests__/App.test.js

import React from 'react';
import { shallow, mount} from 'enzyme'; // renders only the specified react component, nothing else, for testing
import App from '../App'; // import the compoment file you are testing
import EventList from '../EventList'; // imports eventlist component which holds the render info
import CitySearch from '../CitySearch';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';
import NumberOfEvents from '../NumberOfEvents';

// describe = scope

//unit tests
describe('<App /> component', () => {
    let AppWrapper; //replaces first line of code for each test (const AppWrapper = shallow(<App />);) so you call it once before all tests begin   
    beforeAll(() => {
    AppWrapper = shallow(<App />);
    });

    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
      });

    test('render CitySearch', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
      });

    test('render NumberOfEvents', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    });
});

// integration tests
describe('<App /> integration', () => {
  test('App passes "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state('events');
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount(); //unmount as multiple tests using same DOM causes interference
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state('locations');
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
    AppWrapper.unmount();
  });

  test('get list of events matching the city selected by the user', async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    const selectedIndex = Math.floor(Math.random() * (suggestions.length));
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(event => event.location === selectedCity);
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();
  });

  test('get list of all events when user selects "See all cities"', async () => {
    const AppWrapper = mount(<App />);
        const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
        await suggestionItems.at(suggestionItems.length - 1).simulate('click');
        const allEvents = await getEvents();
        expect(AppWrapper.state('events')).toEqual(allEvents);
        AppWrapper.unmount();
  }); 

  //integration testing for NumberOfEvents
  
  test('App passes "numberOfEvents" state as a prop to NumberOfEvents', () => {
    const AppWrapper = mount(<App />);
    const AppEventCountState = AppWrapper.state('numberOfEvents');
    expect(AppEventCountState).not.toEqual(undefined);
    AppWrapper.setState({ numberOfEvents: 10 });
    expect(AppWrapper.find(NumberOfEvents).props().numberOfEvents).toBe(AppWrapper.state('numberOfEvents'));
    AppWrapper.unmount();
  }); 

  /*test('apps state changes in line with input for NumberOfEvents', async () => {
    const AppWrapper = mount(<App />);
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    const inputField = NumberOfEventsWrapper.find('input.number');
    const eventObject={target: {value: 20}};
    inputField.simulate('change', eventObject);
    await getEvents();
    expect(AppWrapper.state('numberOfEvents')).toBe(20);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(20);
    AppWrapper.unmount();
}); */

/*
  test("check if state in the app changes on input change in NumberOfEvents", () => {
      const AppWrapper = mount(<App />);
          const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
          NumberOfEventsWrapper.find(".number").simulate("change", {target: { value: 12 },});
          expect(NumberOfEventsWrapper.state("number")).toBe(12);
          expect(AppWrapper.state("numberOfEvents")).toBe(12);
          AppWrapper.unmount();
      }); */

  test('Filtered list of events matches mock data', async () => {
    const AppWrapper = mount(<App />);
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    NumberOfEventsWrapper.find('.number').simulate('change', {target: { value: 20 },});
    await getEvents();
    expect(AppWrapper.state('events')).toEqual(mockData.slice(0, 20));
    AppWrapper.unmount();
});

});


