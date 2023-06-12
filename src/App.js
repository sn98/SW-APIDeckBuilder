import { React, useState, useEffect } from 'react'
import { Grid, Pagination, Stack, Link, Typography, Breadcrumbs } from '@mui/material'
import usePagination from './components/Pagination'
import './App.css'
import Header from './components/Header'
import CardSummary from './components/CardSummary'
import DeckSummary from './components/DeckSummary'
import CardDetail from './components/CardDetail'
import DeckSearch from './components/DeckSearch'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import CardSearch from './components/CardSearch'
import axios from 'axios'
import addbutton from './assets/buttons/smolAddButton.svg'

function handleClick() {
  console.info('You clicked a breadcrumb.');
}

function App() {
  const baseUrl = "https://swapi.dev/api/"
  const films = "https://swapi.dev/api/films/"
  const people = "https://swapi.dev/api/people/"
  const planets = "https://swapi.dev/api/planets/"
  const species = "https://swapi.dev/api/species/"
  const starships = "https://swapi.dev/api/starships/"
  const vehicles = "https://swapi.dev/api/vehicles/"

  let [showDecks, updateTab = (isDecks) => {
    showDecks = isDecks
  }] = useState(false);
  let [filter, changefilter = (change) => {
    console.log('this is the new filter', change)
    filter = change
  }] = useState('az');

  useEffect(() => {
    const getCards = async () => {
      await fetchAndSetCards()
      // setCards(cardsFromDB)
    }
    getCards()
  }, [])

  const fetchAndSetCards = async () => {
    setCards(cards = [])
    const result = await axios.get(people)

    result.data.results.forEach(async (f, index) => {
      const homeworld = await axios.get(f.homeworld)
      console.log(f.species)
      let starships = []
      let vehicles = []
      let species = []
      f.starships.forEach(async (s) => {
        const star = await axios.get(s)
        starships.push(star.data.name)
      })
      f.vehicles.forEach(async (c) => {
        const car = await axios.get(c)
        vehicles.push(car.data.name)
      })
      f.species.forEach(async (sp) => {
        const spe = await axios.get(sp)
        species.push(spe.data.name)
      })
      setCards(cards = [
        ...cards,
        {
          id: index,
          name: f.name,
          gender: f.gender,
          homeworld: homeworld.data.name,
          species: species,
          vehicles: vehicles,
          starships: starships,
        }
      ])
    })
  }

  let [cards, setCards] = useState([])
  let [decks, setDecks] = useState([])

  // Creating Deck
  const addDeck = async ({ faction, name }) => {
    console.log('we added a deck')
    const post = { faction: faction, name: name }
    try {
      const res = await axios.post(baseUrl + 'deck', post)
      console.log(res.data)
    } catch (e) {
      alert(e)
    }
  }

  //Pagination Stuff
  let [page, setPage] = useState(1);
  let [deckPage, setDeckPage] = useState(1);
  const PER_PAGE = 15;

  const count = Math.ceil(cards.length / PER_PAGE);
  const deckCount = Math.ceil(decks.length / PER_PAGE);
  const _DATA = usePagination(cards, PER_PAGE);
  const _DECKDATA = usePagination(decks, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  const handleDeckChange = (e, p) => {
    setDeckPage(p);
    _DECKDATA.jump(p);
  };

  return (
    <div style={mainPage}>
      <div>
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
        {showDecks ? <DeckSearch addDeck={addDeck} /> : <CardSearch filter={filter} changefilter={changefilter} />}


      </div>
      {showDecks ?
        <DeckSummary />
        // decks.length === 0 ?
        //   <p>No Decks Created. Please create a Deck by pressing the Add Deck {<img src={addbutton} />} button above</p> :
        //   <div style={grid}>
        //     {<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={padding}>
        //       {_DECKDATA.currentData().map((deck, index) => (
        //         <CardSummary key={index} data={deck} />
        //       ))}
        //     </Grid>}
        //   </div>
        :
        <div style={grid}>
          {<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={padding}>
            {_DATA.currentData().map((card, index) => (
              <CardSummary key={index} data={card} />
            ))}
          </Grid>}
        </div>
      }

      {showDecks ?
        <Pagination style={bottom}
          count={deckCount}
          size="large"
          page={deckPage}
          variant="outlined"
          shape="rounded"
          onChange={handleDeckChange}
        /> :
        <Pagination style={bottom}
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />}

    </div>
  );
}

const mainPage = {
  display: "flex",
  flexDirection: "column",
  alignItem: "center",
  justifyContent: "space-between"
  // marginBottom: "100px",
}

const grid = {
  paddingTop: "30px",
  // position: "absolute",
  // top: "260px",
  height: "770px",
  overflow: "hidden",
  overflowY: "auto"
  // marginBottom: "100px",
}
const padding = {
  paddingLeft: "10px",
  // marginBottom: "100px",
}

const bottom = {
  position: "absolute",
  bottom: "100px",
}

export default App;
