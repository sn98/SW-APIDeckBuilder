import { React, useState, useEffect } from 'react'
import { Grid, Pagination, Stack, Link, Typography, Breadcrumbs } from '@mui/material'
import usePagination from './components/Pagination'
import './App.css'
import Header from './components/Header'
import CardSummary from './components/CardSummary'
import DeckSummary from './components/DeckSummary'
import CardDetail from './components/CardDetail'
import DeckSearch from './components/DeckSearch'
import Cards from './components/Cards'
import Decks from './components/Decks'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import CardSearch from './components/CardSearch'
import axios from 'axios'
import addbutton from './assets/buttons/smolAddButton.svg'

function handleClick() {
  console.info('You clicked a breadcrumb.');
}

function App() {
  const baseUrl = "https://swapi.dev/api/"

  let [showDecks, updateTab = (isDecks) => {
    showDecks = isDecks
  }] = useState(false);

  useEffect(() => {
    const getCards = async () => {
      setCards(cards = [])
      await fetchAndSetCards(baseUrl + "people/")
    }
    getCards()
  }, [])

  const fetchAndSetCards = async (url) => {
    const result = await axios.get(url)
    result.data.results.forEach(async (f, index) => {
      const homeworld = await axios.get(f.homeworld)
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
      const exists = cards.some(v => (v.name === f.name));
      if (!exists) setCards(cards = [
        ...cards,
        {
          id: index,
          name: f.name,
          birth: f.birth_year,
          gender: f.gender,
          homeworld: homeworld.data.name,
          species: species,
          vehicles: vehicles,
          starships: starships,
          created: f.created,
        }
      ])
      cards.sort((a, b) => b.name > a.name ? -1 : 1)
    })
    if (result.data.next != null)
      fetchAndSetCards(result.data.next)
  }
  const searchFunction = async (url) => {
    const result = await axios.get(url)
    setCards(cards = [])
    result.data.results.forEach(async (f, index) => {
      const homeworld = await axios.get(f.homeworld)
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
      const exists = cards.some(v => (v.name === f.name));
      if (!exists) setCards(cards = [
        ...cards,
        {
          id: index,
          name: f.name,
          birth: f.birth_year,
          gender: f.gender,
          homeworld: homeworld.data.name,
          species: species,
          vehicles: vehicles,
          starships: starships,
          created: f.created,
        }
      ])
      cards.sort((a, b) => b.name > a.name ? -1 : 1)
    })
  }

  const cardSearch = async (term) => {
    if (term != "") await searchFunction(baseUrl + "people/?search=" + term)
    else await fetchAndSetCards(baseUrl + "people/")
  }
  const deckSearch = (term) => {

    setDecks(originalDecks)
    console.log('we searching the decks' + originalDecks)
    if (term != "") { setDecks(decks.filter((deck) => deck.name == term)) }
    else { setDecks(originalDecks) }
  }
  let [cards, setCards] = useState([])
  let [decks, setDecks] = useState([])
  let [originalDecks, setOriginal] = useState([])

  const deleteDeck = (id) => {
    setDecks(decks.filter((deck) => deck.id !== id))
    setOriginal(originalDecks.filter((deck) => deck.id !== id))
  };

  const addToDeck = (id, card) => {
    setDecks(decks.map((deck) =>
      deck.id === id ? { ...deck, cards: [...deck.cards, card] } : deck
    ))
    setOriginal(originalDecks.map((deck) =>
      deck.id === id ? { ...deck, cards: [...deck.cards, card] } : deck
    ))
  }
  const removeFromDeck = (deckId, cardId) => {
    const index = decks.findIndex((deck) => deck.id === deckId)
    if (index !== -1) decks[index].cards = decks[index].cards.filter((card) => card.id !== cardId)
    setDecks(decks)
  }
  // Creating Deck
  const addDeck = async (faction, name) => {
    const id = Math.floor(Math.random() * 10000) + 1
    setDecks(decks = [
      ...decks,
      {
        id: id,
        faction: faction,
        name: name,
        cards: []
      }
    ])
    setOriginal(originalDecks = [
      ...originalDecks,
      {
        id: id,
        faction: faction,
        name: name,
        cards: []
      }
    ])
  }


  return (
    <div>
      <div className='header-div'>
        <Header title="SW-API Deck Builder" updateTab={updateTab} showDecks={showDecks} />
      </div>

      <br />
      {showDecks ?
        <Decks
          decks={decks}
          deckSearch={deckSearch}
          deleteDeck={deleteDeck}
          addDeck={addDeck}
          removeFromDeck={removeFromDeck}
          addToDeck={addToDeck}
        /> :
        <Cards
          decks={decks}
          cards={cards}
          cardSearch={cardSearch}
          addToDeck={addToDeck}
          removeFromDeck={removeFromDeck}
        />}
      {/* <Stack spacing={2}>
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
          {showDecks ? <DeckSearch addDeck={addDeck} /> : <CardSearch filter={filter} changefilter={changefilter} sort={sortCards} searchFunc={cardSearch} />}
 */}

    </div>
  );
}

const mainPage = {
  display: "flex",
  flexDirection: "column",
  alignItem: "center",
  justifyContent: "space-between",
  // marginBottom: "100px",
}

const grid = {
  paddingTop: "30px",
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
