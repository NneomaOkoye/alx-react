import React from 'react';
import './App.css';
import HolbertonLogo from '../assets/HolbertonLogo.jpg';
import { getFooterCopy, getFullYear } from '../utils/utils'

function App() {
  return (
    <div className="App">
      <div className="App-header" data-testid="app-header">
        <img src={ HolbertonLogo } alt='HolbertonLogo' className='logo'/>
        <h1>School dashboard</h1>
      </div>
      <div className="App-body" data-testid="app-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email:</label>
        <input type='text' id='email' />

        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' /> 
      
        <button>Ok</button>
      </div>
      <div className="App-footer" data-testid="app-footer">
        <p>Copyright { getFullYear() } - { getFooterCopy(false) }</p>
      </div>
    </div>
  );
}

export default App;
