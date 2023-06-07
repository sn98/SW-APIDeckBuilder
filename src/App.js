import { React, useState } from 'react';
import './App.css';
import Header from './components/Header';
import CardSummary from './components/CardSummary';

function App() {
  let [showDecks, updateTab = (isDecks) => {
    showDecks = isDecks
  }] = useState(false);

  return (
    <div className="mainPage">
      <Header title="SW-API Deck Builder" updateTab={updateTab} showDecks={showDecks} />
      <h1>We are in the {showDecks ? 'Decks' : 'Cards'}</h1>
      <CardSummary />
    </div>
  );
}

export default App;
