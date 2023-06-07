import { React } from 'react';
import NameTag from './NameTag';
import card from '../assets/icons/card.svg';
import deck from '../assets/icons/deck.svg';

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
                <h4 >{props.title}</h4>
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

export default Header
