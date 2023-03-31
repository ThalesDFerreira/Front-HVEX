import React from 'react';
import './styles/App.css';
import Header from "./components/Header";
import HomePage from './pages/Home';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import PageFour from './pages/PageFour';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <PageOne/>
      <PageTwo/>
      <PageThree/>
      <PageFour/>
    </div>
  );
}

export default App;
