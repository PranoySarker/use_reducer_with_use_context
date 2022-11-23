
import React from 'react';
import { useReducer } from 'react';
import './App.css';
import ComponentA from './components/ComponentA';

export const counterContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='App'>
      <div>Count - {count}</div>
      <counterContext.Provider value={{ countDispatch: dispatch }}>
        <ComponentA></ComponentA>
      </counterContext.Provider>
    </div>
  );
}

export default App;
