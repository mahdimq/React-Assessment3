### Conceptual Exercise

Answer the following questions below:

- What is Redux? Why might you use it?
  Redux is a library for managing state. Can be used to manage large apps where a lot of components require state in a single immutable objet, and it also avoids prop-drilling.

- What are three features of the Redux developer tool in Chrome?
  1.It lets you inspect every state and the action payload
  2.It lets you go back in time by "canceling" actions
  3.If the reducer throws an error, we can identify the error and also during the action when this happened

- What is a store?
  A store is an object which holds the entire state tree of the application

- What is a reducer?
  Reducers are functions which accept two objects: A state and an action. Reducers determine the changes that happen to the application's state. Reducers should be "pure" functions.

- What is an action?
  Redux actions are simple instructions that tell the reducers how to adjust state. Actions are objects that contain a "type" key. Actions are the only source of information for the store. We 'fire off an action' by running the "dispatch" function on the store.

- What is an action creator?
  An action creater is a function that returns an action object. Calling an action creater only returns an object so it needs to either by bound to the store beforehand, or dispatch the result by calling the action creater.

- How does data flow in a React/Redux application?
  1.An action is dispatched when user interacts with the application. We call the "store.dispatch(action)"
  2.The reducer function is called with the current state. The redux store calls the reducer function we provided.
  3.The root reducer may combine multiple reducers into a single state tree. The store notifies the the view by executing the callback function.
  4.The redux store saves the complete state tree returned by the root reducer. The view can retrieve the updated state and re-render again.

- What is the purpose of the `<Provider>` component?
  The "<Provider/>" makes the Redux "store" available to any nested component that have been wrapped in the "connect()" function. Usually the higher most parent component is the one wrapped in the "<Provider />".

- What is the purpose of the `useSelector` hook? What does it return?
  useSelector is a hook that extracts the data from the Redux store state. When an action is dispatched, the useSelector will compare the previous selector result value with the current one and if changed will render the new value.

- Describe the `useDispatch` hook. What do you use it for?
  Invoking useDispatch will dispatch the action from the Redux store. It returns the store's dispatch mathod so we can use it to manually dispatch actions.

- What is redux-thunk and why would you use it?
  Redux thunk is a middleware, and it is used to write action creators that return a function instead of an action. It can be used to to delay the dispatch or actions (making api calls), or dispatch action until a specific condition is met.

- What are propTypes?
  PropTypes is a library that helps check the "types" of values passed down as props. We can set specific types of props for specific components and PropTypes object will check the type against the specified type and raise a warning if the types were not matched.

- Describe the `useCallback` hook. What is it used for?
  the useCallback hook is a React hook that takes a callback function and an array of dependencies as arguments. This returns a "memoized" version of the function that was passed in as the argument. The useCallback hook prevents the child component from re-rendering if the parent state changes.

- Compare and contrast the `useReducer` hook with Redux (including react-redux). Why would you choose one over the other?
  Redux "useReducer" has better performance over react's "useReducer". The React useReducer will re-render the component if there is any mutation of the state. Redux useReducer is more selective about the state changes that will cause a component to re-render. Usage of one over the other mostly depends on the size of the app. If the app is a large one with complex state and high frequency updates, its better to use redux (imo), but for smaller apps with lower frequency updates, useContext with useReducer should be fine.
