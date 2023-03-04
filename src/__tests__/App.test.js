// src/__tests__/App.test.js

import React from 'react';
import { shallow } from 'enzyme'; // renders only the specified react component, nothing else, for testing
import App from '../App'; // import the compoment file you are testing
import EventList from '../EventList'; // imports eventlist component which holds the render info
import CitySearch from '../CitySearch';

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
});