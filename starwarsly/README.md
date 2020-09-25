# StarWars.ly

---

### Everything about the Star Wars Universe

It is an app for exploring the people, planets, and films of the Star Wars franchise.

## Using the App

---

The app starts off with single button, a link to the first firm on the homepage, the rest of the links are marked as "unknowns" and will be hidden from the user. As the users explore and access the "unknowns" the links will reveal the topics they discover and keep it visible to the user.

This App is using Redux to store the state of the app. The state in the components for people, films and planets are managed as independent objects within the store. The Redux-persist library allows the revealed data to remain in localStorage so that it will persist between sessions.

## This project was created with:

- React
- Redux
- Router
- React-Redux
- Redux-Thunk
- Redux-Persist
- Axios and the [Star Wars API](https://swapi.dev)

## Installing the app on Local Environment

---

To get the code on your local machine, clone the repository and install the dependencies:

```
> git clone https://github.com/mahdimq/React-Assessment3
> cd React-Assessment3
> npm install
> npm start
```

## Component Structure (App Hierarchy)

- App (Homepage)
  - NavBar
  - Routes
    - HomePage
    - FilmList (Redux)
      - ItemList (films)
    - PlanetList (Redux)
      - ItemList (planets)
    - PersonList (Redux)
      - ItemList (people)
    - Film (film-id)
      - Sublist (planets)
      - Sublist (people)
    - Planet (planet-id)
      - Sublist (films)
      - Sublist (people)
    - Person (person-id)
      - Sublist (films)

### Created By

---

This app was developed by the [Rithm School](https://www.rithmschool.com)
