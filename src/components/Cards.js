import { React, useState } from 'react'
import { Grid, Pagination, Stack, Link, Typography, Breadcrumbs } from '@mui/material'
import usePagination from './Pagination'
import '../App.css'
import CardSummary from './CardSummary'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import CardSearch from './CardSearch'
import CardDetail from './CardDetail'

function handleClick() {
    console.info('You clicked a breadcrumb.');
}

function Cards({ decks, cards, cardSearch, addToDeck, removeFromDeck, size }) {

    let [filter, changefilter] = useState('az');
    const sortCards = (change) => {
        if (change === 'old') {
            cards.sort((a, b) => b.birth > a.birth ? 1 : -1)
        } else if (change === 'young') {
            cards.sort((a, b) => b.birth > a.birth ? -1 : 1)
        } else {
            cards.sort((a, b) => b.name > a.name ? -1 : 1)
        }
    }

    //Pagination Stuff
    let [page, setPage] = useState(1);
    const PER_PAGE = 15;

    const count = Math.ceil(cards.length / PER_PAGE);
    const _DATA = usePagination(cards, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    const [showDetail, selectDetail] = useState(false)
    const [cardToDetail, selectCardToDetail] = useState(null)

    return (
        <div>
            <div style={mainPage}>
                <div>
                    <br />
                    <Stack spacing={2}>
                        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                            <Typography key="3" color="text.primary" onClick={() => {
                                selectDetail(false)
                                selectCardToDetail(null)
                            }}>
                                All Cards
                            </Typography>,
                            <Link underline="hover" key="1" color="inherit" onClick={handleClick}>
                                {showDetail && cardToDetail !== null ? cardToDetail.name + ' Details' : 'Select a card'}
                            </Link>,
                        </Breadcrumbs>
                    </Stack>
                    {!showDetail && <CardSearch filter={filter} changefilter={changefilter} sort={sortCards} searchFunc={cardSearch} size={size} />}

                </div>

                <div className='grid'>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {showDetail && cardToDetail !== null ? <CardDetail data={cardToDetail} size={size} /> : _DATA.currentData().map((card, index) => (
                            <CardSummary key={index} data={card} decks={decks} addToDeck={addToDeck} removeCard={removeFromDeck} gotoDetails={selectDetail} selectCard={selectCardToDetail} size={size} />
                        ))}
                    </Grid>
                </div>

            </div>

            {!showDetail && <Pagination style={bottom}
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
    justifyContent: "space-between",
    // marginBottom: "100px",
}



const bottom = {
    position: "absolute",
    bottom: "20px",
}

export default Cards;
