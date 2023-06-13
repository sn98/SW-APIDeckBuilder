import { React } from 'react'
import deck from '../assets/icons/whiteDeck.svg'
import deleteIcon from '../assets/buttons/deleteDeck.svg'
import rebel from '../assets/icons/rebelBackground.svg'
import jedi from '../assets/icons/jediBackground.svg'
import empire from '../assets/icons/empireBackground.svg'
import nofaction from '../assets/icons/noFactionBackground.svg'
const DeckSummary = ({ data, onDelete, showTheCards, setDeckToDetail }) => {
    return (
        <div style={padding}>
            <div className='deck-summary-outline' onClick={() => {
                setDeckToDetail(data)
                showTheCards(true)
            }}>
                <div
                    style={
                        data.faction === 'rebel' ? rebelColor :
                            data.faction === 'jedi' ? jediColor :
                                data.faction === 'empire' ? empireColor :
                                    noColor
                    }
                    className='deck-name-frame'>
                    <div ><img className='deck-name-background' src={
                        data.faction === 'rebel' ? rebel :
                            data.faction === 'jedi' ? jedi :
                                data.faction === 'empire' ? empire :
                                    nofaction
                    } /></div>
                    <div style={padding}>
                        <div style={deckControls}>
                            <img src={deck} />
                            <img src={deleteIcon} onClick={() => onDelete(data.id)} style={deleteButton} />
                        </div>
                        <p className='space-between-15' />
                        <p className='card-name'>{data.name}</p>
                    </div>
                </div>

                <div style={dataControls}>
                    <p style={largeText}>{data.cards.length}</p>
                    <p style={total}>total cards</p>
                </div>

            </div>
        </div >
    )
}

const rebelColor = {
    background: '#C53030'
}
const jediColor = {
    background: '#2F855A'
}
const empireColor = {
    background: '#3B3B3B'
}
const noColor = {
    background: '#969696'
}
const deleteButton = {
    position: 'absolute',
    top: '10px',
    right: '10px',
}
const padding = {
    padding: "15px"
}


const deckControls = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
}

const dataControls = {
    marginLeft: "10px",
    marginRight: "10px",
    display: "flex",
    justifyContent: "space-between",
}
const largeText = {
    fontSize: "50px",
}
const total = {
    marginTop: "10px",
}
export default DeckSummary