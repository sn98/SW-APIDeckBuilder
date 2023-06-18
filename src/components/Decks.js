import { React, useState } from 'react'
import { Grid, Pagination, Stack, Link, Typography, Breadcrumbs } from '@mui/material'
import usePagination from './Pagination'
import '../App.css'
import DeckSummary from './DeckSummary'
import CardSummary from './CardSummary'
import DeckSearch from './DeckSearch'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import addbutton from '../assets/buttons/smolAddButton.svg'

function handleClick() {
    console.info('You clicked a breadcrumb.');
}

function Decks({ decks, deckSearch, deleteDeck, addDeck, removeFromDeck, addToDeck, size }) {

    const centerItem = {
        display: "flex",
        alignItems: size <= global.width.lowerEnd ? "flex-start" : "left"
    }
    //Pagination Stuff
    let [page, setPage] = useState(1);
    const PER_PAGE = 15;

    const count = Math.ceil(decks.length / PER_PAGE);
    const _DATA = usePagination(decks, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    const [showCards, showTheCards] = useState(false)
    const [detailedDeck, setDeckToDetail] = useState(null)

    const ccount = Math.ceil(detailedDeck !== null ? detailedDeck.cards.length : 0 / PER_PAGE);
    const _CDATA = usePagination(detailedDeck !== null ? detailedDeck.cards : [], PER_PAGE);
    const handleCChange = (e, p) => {
        setPage(p);
        _CDATA.jump(p);
    };

    return (
        <div>
            <div style={mainPage}>
                <div>
                    <br />
                    <Stack spacing={2}>
                        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                            <Typography key="3" color="text.primary" onClick={() => {
                                showTheCards(false)
                                setDeckToDetail(null)
                            }}>
                                All Decks
                            </Typography>,
                            <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
                                {showCards && detailedDeck !== null ? detailedDeck.name + ' Deck' : 'Select a deck'}
                            </Link>,
                        </Breadcrumbs>
                    </Stack>
                    <DeckSearch addDeck={addDeck} searchFunc={deckSearch} size={size} isDecks={true} />
                </div>

                {decks.length === 0 ?
                    <p>No Decks Created. Please create a Deck by pressing the Add Deck {<img src={addbutton} />} button above</p> :
                    <div className='grid'>
                        {<Grid container spacing={{ xs: 2, md: 3, lg: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                            {showCards && detailedDeck !== null ? _CDATA.currentData().map((card, index) => (
                                <CardSummary key={index} data={card} decks={decks} showTheCards={showTheCards} deck={detailedDeck} addToDeck={addToDeck} deckCards={true} removeCard={removeFromDeck} size={size} />
                            )) : _DATA.currentData().map((deck, index) => (
                                <DeckSummary key={index} data={deck} onDelete={deleteDeck} showTheCards={showTheCards} setDeckToDetail={setDeckToDetail} size={size} />
                            ))}
                        </Grid>}
                    </div>}
            </div >
            <div style={centerItem}>
                {showCards ? <Pagination style={bottom}
                    count={ccount}
                    size="large"
                    page={page}
                    variant="outlined"
                    shape="rounded"
                    onChange={handleChange}
                /> : <Pagination style={bottom}
                    count={count}
                    size="large"
                    page={page}
                    variant="outlined"
                    shape="rounded"
                    onChange={handleCChange}
                />}</div>
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


const bottom = {
    position: "absolute",
    bottom: "20px",
}

export default Decks;
