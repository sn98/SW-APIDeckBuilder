import { React, useState } from 'react';
import './App.css';
import Header from './components/Header';
import CardSummary from './components/CardSummary';
import CardDetail from './components/CardDetail';

function App() {
  let [showDecks, updateTab = (isDecks) => {
    showDecks = isDecks
  }] = useState(false);

  const cards = ([{
    id: 1,
    name: 'Luke Skywalker',
    species: 'Human',
    gender: 'm',
    homeworld: 'Planet',
    vehicles: [
      { id: 'v1', name: 'Snowspeeder' },
      { id: 'v2', name: 'Imperial Speeder Bike' }
    ],
    starships: [
      { id: 's1', name: 'X-wing' },
      { id: 's2', name: 'ImperialShuttle' }
    ]
  }])
  return (
    <div className="mainPage">
      <Header title="SW-API Deck Builder" updateTab={updateTab} showDecks={showDecks} />
      <h1>We are in the {showDecks ? 'Decks' : 'Cards'}</h1>

      {cards.map((card) => (
        <CardSummary key={card.id} data={card} />
        // <CardDetail key={card.id} data={card} />
      ))}


    </div>
  );
}

export default App;
