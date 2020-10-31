import React from 'preact/compat';
import './App.css';
import Classes from './Components/Classes';
import Hooks from './Components/Hooks';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require("preact/debug");
}


const App = (props) => {
  return (
    <>
      <Hooks />
    </>
  );
}


export default App;