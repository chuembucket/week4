- [ x] Create an _index.html_ with a basic HTML page structure
- [ x] Create an empty CSS file for the project
- [ x] Create an empty JavaScript file for the project
- [ x] Link to the empty CSS file from the bottom of the `head` of your HTML file
- [ x] Link to the empty JavaScript file from the bottom of the `body` of your HTML file
- [ x] Add a level-1 heading (`h1`) to the body with the app title, just so there's something to see on the page

Check the app in the browser.

- [ x] Add a Leaflet map for displaying the list of stops to the page
- [ x] Import the data from _site/data/stops.js_ into your JavaScript file.
- [ x] Import the data from _site/data/universitycity.js_ into your JavaScript file.
- [ x] Add the University City shape to the map. Style it so that it has some pop.

- [ x] Create a function called `makeStopFeature` to transform one of the stop elements into a GeoJSON-like feature.
- [ x] Use the function to display all the `stops` data on the map.
- [ ] Create a function to show an array of stops on the map.

- [ ] Create a list element (unordered -- `ul`) in the HTML give it an id of `stop-list`
- [ ] Write a function that fills in the list with list item (`li`) elements for each stop in an array
- [ ] Add a checkbox for each route in University City.
- [ ] Add a text box to filter stops whose name contains a given string. The text box should have an id of `stop-name-filter`.
- [ ] Write a predicate function called `shouldShowStop` that will return `true` if a given stop should be shown according to the currently selected filters, and will return `false` if a given stop should not be shown. For now, ignore the filters and always return `true`.
