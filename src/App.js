import { React, useState } from 'react'
import './App.css';
import Header from './components/Header'

function App() {
  let [showDecks, updateTab = (isDecks) => {
    showDecks = isDecks
  }] = useState(false);

  return (
    <div className="mainPage">
      <Header title="SW-API Deck Builder" updateTab={updateTab} showDecks={showDecks} />
      <h1>We are in the {showDecks ? 'Decks' : 'Cards'}</h1>
    </div>
  );
}

export default App;
