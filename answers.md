- In action creators, like `getFilmFromAPI`, we use a "regular expression" ---
  what is that regular expression, and what is its purpose?
  Regular Expression or regex is a sequence of characters (string of text) that allows you to create a pattern that completely describes a set of strings.

- We're persisting the Redux store, so if you re-visit the app, it will remember the topics you've visited. Where is this stored? How is this done?
  redux-persist will store the data in local storage. When the state changes, redux-persist will save the state object into persisted storage. Then on app launch, it retrieves this persisted state and saves it back to redux.

- What does `combineReducers` do? Why are we using it?
  combineReducers function helps us organize our reducers. It allows the different reducers to manage their own state but using only one store. We are using it to manage the state of the films, people and planets that we get from the API.

- How does the "Reset to Fresh Exploration" feature work?
  We create a reset action in a reducer, and dispatch it in a resetAll function. This will clear the state.

* Why are `FilmList.js`, `PlanetList.js`, and `PersonList.js` all simple components that use an `ItemList`? Why is this a good design?
  `FilmList.js`, `PlanetList.js`, and `PersonList.js` are simple components because they use a reusable `ItemList.js` component. This is a good design because we can add additional simple components and use `ItemList.js` and the app should be functional.

* In the `HomePage` component we use the `useSelector` hook to save only a single fact--- whether the first film is loaded, We could instead have selected all the films, and had the check for whether the first film is loaded in our `render` function. Why is this worse? What would the performance implications be?
  By using the useSelector to save a single fact, we reduce the amount of time it would take for the API to retrieve the data to a single result. Saving all the data may slower the initial rendering of the application.

- What good ideas for designing and organizing React apps have you learned from studying this code?
  1.Using a reusable component allows the app to be dynamic.
  2.Structure of the application show clear App hierarchy.
  3.The app uses small managable components.
  4.Uses redux to manage the state rather than each component having its own state.

- Which Star Wars character would make the best React developer, and why?
  Jabba the Hutt. Not sure why, because he's a bad-ass?
