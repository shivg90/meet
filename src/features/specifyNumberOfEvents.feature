Feature: Specify Number of Events

Scenario: When user hasn’t specified a number, 32 is the default number 
Given the app has loaded
When the user has not yet selected a number of events
Then the user sees 32 events by default

Scenario: User can change the number of events they want to see
Given the app has loaded
When the user has selected a number of events
Then the event list elements shows the number of events set by the user

