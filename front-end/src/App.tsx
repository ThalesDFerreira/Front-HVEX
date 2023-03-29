import React from 'react';
import './styles/App.css';
import Header from "./components/Header";
import HomePage from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
    </div>
  );
}

export default App;
