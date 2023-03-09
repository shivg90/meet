Feature: Show and Hide Events Details

Scenario: An event element is collapsed by default
Given a collapsed event element containing events is loaded on the page.
When the user opens the app
Then the event element should be collapsed by default

Scenario: User can expand an event to see its details
Given the event list and event elements have loaded
When the user expands an event to see its details
Then the event element expands to show details about the selected event.

Scenario: User can collapse an event to hide its details
Given the event element is showing the expanded event details.
When the user collapses an event to hide its details
Then the event details part of the event element is collapsed.

