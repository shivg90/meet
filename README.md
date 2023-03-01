# Meet App

Objective:
To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

Serverless Technology
This app will use AWS Lambda to deploy serverless functions. This has several benefits:

- the responsibility of managing servers is transferred from developer to AWS, giving developers more time to focus on code creation and shorten the go-to-market time.
- if the application experiences periods of higher demand, serverless technology can quickly provide additional servers, making scalability easy.
- it's cost effective; only paying when code is executed.

Key Features:

- Filter events by city.
- Show/hide event details.
- Specify number of events.
- Use the app when offline.
- Add an app shortcut to the home screen.
- View a chart showing the number of upcoming events by city

User Stories and Scenarios

FEAUTRE 1: FILTER EVENTS BY CITY
As a [user]
I should be able to [“filter events by city”]
So that [I can see the list of events that take place in that city]
Scenario 1: when user hasn't searched for a city, show upcoming events from all cities
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events
Scenario 2: user should see a list of suggestions when they search for a city
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed
Scenario 3: user can select a city from the suggested list
Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showingWhen the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)And the user should receive a list of upcoming events in that city

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
As a [user]
I should be able to [view or hide the details of an event]
So that [I can read more or less information about an event]
Scenario 1: An event element is collapsed by default
Given the user hasn’t yet selected to show details for an event
When the user is on the main page
Then the user should see a list of all upcoming events, displaying only top line information about the event
Scenario 2: User can expand an event to see its details
Given the user wants to see more details of a certain event
When the user selects to open the event’s details
Then the user should see more detailed information about the specific event (time, location…).
Scenario 3: User can collapse an event to hide its details
Given the user has selected to hide the details of an event
When the user hides the event details
Then the user should see only the top line information about this event again

FEATURE 3: SPECIFY NUMBER OF EVENTS
As a [user]
I should be able to [specify the number of events I view in the app]
So that [I can see more or fewer events in the list at the same time]
Scenario 1: When user hasn’t specified a number, 32 is the default number
Given user hasn’t specified the number of events
When the user is on the main page
Then the user should see the list of default 32 events
Scenario 2: User can change the number of events they want to see
Given user has specified he number of events they want to see
When the user inputs the desired number of events
Then the user should see an updated list of events that match in length their specified input

FEATURE 4: USE THE APP WHEN OFFLINE
As a [user]
I should be able to [use the app when offline]
So that [I can see the list of events I viewed last time I was online]
Scenario 1: Show cached data when there’s no internet connection
Given the user has already interacted with the app
When the user opens the app without an internet connection
Then the user should see the page they last visited with corresponding event information
Scenario 2: Show error when user changes the settings (city, time range)
Given the user is interacting with the app offline
When the user selects to change their settings in the app
Then the user should receive an error message

FEATURE 5: DATA VISUALIZATION
As a [user]
I should be able to [see a chart of data displaying the upcoming events in each city]
So that [I can easily see what events are happening in which city]
Scenario 1: Show a chart with the number of upcoming events in each city
Given user is using the app
When the user is on the main page
Then the user should see a data visualisation of the upcoming events happening in each city
