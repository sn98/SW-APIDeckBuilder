import { React, useEffect, useState } from 'react';
import NameTag from './NameTag';
import card from '../assets/icons/card.svg';
import deck from '../assets/icons/deck.svg';
import { grey } from '@mui/material/colors';

const Header = (props) => {

    const goToDecks = () => props.updateTab(true)

    const goToCards = () => props.updateTab(false)
    return (
        <div >
            <div className="header">
                <div>
                    <button className='iconbtn' onClick={goToCards} style={{ backgroundColor: !props.showDecks ? '#fff' : '#B8B8B8' }}>
                        <img src={card} />
                        &nbsp;All Cards
                    </button>
                    <button className='iconbtn' onClick={goToDecks} style={{ backgroundColor: props.showDecks ? '#fff' : '#B8B8B8' }}>
                        <img src={deck} />
                        &nbsp;Decks
                    </button>
                </div>
                {props.width >= global.width.lowerEnd &&
                    <p><b>SW-</b>API Deck Builder</p>
                }
                <NameTag name='Sean Gayle'></NameTag>

            </div>
            <hr style={line} />
        </div >
    )
}

Header.defaultProps = {
    title: "SW-API Deck Builder"
}
const line = {
    background: "grey",
    height: "1px",
    border: "none",
}
const darkside = {
    display: "inline-block",
    margin: "0",
    fontWeight: "bold",
    fontSize: "60px",
}
const goodside = {
    display: "inline-block",
    margin: "0",
    fontSize: "60px",
    color: "#B8B8B8"

}

export default Header
