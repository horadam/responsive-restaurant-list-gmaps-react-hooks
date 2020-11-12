import React from 'react'
import { Provider } from 'react-redux'
import './App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;
