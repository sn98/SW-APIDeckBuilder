import { React, useState } from 'react';
import { Grid, Pagination } from '@mui/material';
import usePagination from "./components/Pagination";
import './App.css';
import Header from './components/Header';
import CardSummary from './components/CardSummary';
import CardDetail from './components/CardDetail';

function App() {
  let [showDecks, updateTab = (isDecks) => {
    showDecks = isDecks
  }] = useState(false);

  const cards = ([
    {
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
    },
    {
      id: 1,
      name: 'Anikin Skywalker',
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
    },
  ])

  let [page, setPage] = useState(1);
  const PER_PAGE = 1;

  const count = Math.ceil(cards.length / PER_PAGE);
  const _DATA = usePagination(cards, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (

    <div className="mainPage">
      <Header title="SW-API Deck Builder" updateTab={updateTab} showDecks={showDecks} />
      <h1>We are in the {showDecks ? 'Decks' : 'Cards'}</h1>
      <br />
      <br />
      <br />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {_DATA.currentData().map((card) => (
          <CardSummary key={card.id} data={card} />
        ))}
      </Grid>

      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />

    </div>
  );
}

export default App;
