import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { reducer } from './reducers';

import './App.css';
import MiniUziChuck from './images/mini-uzi-chuck.png';


import JokeCard from './components/JokeCard';

const store = createStore(reducer, applyMiddleware(thunk, logger));

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <h1>Chuck Norris Joke Generator</h1>
        <img src = {MiniUziChuck} alt = 'Chuck Norris dual wielding mini uzis'/>
        <JokeCard />
      </div>
    </Provider>
  );
}

export default App;
