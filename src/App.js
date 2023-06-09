import { React, useState } from 'react';
import { Grid, Pagination, Stack, Link, Typography, Breadcrumbs } from '@mui/material';
import usePagination from "./components/Pagination";
import './App.css';
import Header from './components/Header';
import CardSummary from './components/CardSummary';
import CardDetail from './components/CardDetail';
import DeckSearch from './components/DeckSearch';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CardSearch from './components/CardSearch';

function handleClick() {
  console.info('You clicked a breadcrumb.');
}

function App() {
  let [showDecks, updateTab = (isDecks) => {
    showDecks = isDecks
  }] = useState(false);
  let [filter, changefilter = (change) => {
    console.log('this is the new filter', change)
    filter = change
  }] = useState('az');

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
      <br />
      <Stack spacing={2}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Typography key="3" color="text.primary">
            {showDecks ? 'All Decks' : 'All Cards'}
          </Typography>,
          <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            {showDecks ? 'Select a deck' : 'Select a card'}
          </Link>,
        </Breadcrumbs>
      </Stack>
      <br />
      {showDecks ? <DeckSearch /> : <CardSearch filter={filter} changefilter={changefilter} />}
      <br />
      <br />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={padding}>
        {_DATA.currentData().map((card) => (
          <CardSummary key={card.id} data={card} />
        ))}
      </Grid>

      <Pagination style={bottom}
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

const padding = {
  paddingLeft: "10px",
}

const bottom = {
  position: "absolute",
  bottom: "100px",
}

export default App;
