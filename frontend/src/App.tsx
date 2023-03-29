import React from 'react';
import './styles/App.css';
import Header from "./components/Header";
import HomePage from './pages/Home';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <PageOne/>
      <PageTwo/>
    </div>
  );
}

export default App;
