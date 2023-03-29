import React from 'react';
import './styles/App.css';
import Header from "./components/Header";
import HomePage from './pages/Home';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <PageOne/>
      <PageTwo/>
      <PageThree/>
    </div>
  );
}

export default App;
