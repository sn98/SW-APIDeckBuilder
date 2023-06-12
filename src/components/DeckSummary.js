import { React, useState } from 'react'
import deck from '../assets/icons/whiteDeck.svg'
import deleteDeck from '../assets/buttons/deleteDeck.svg'
import rebel from '../assets/icons/rebelBackground.svg'

const DeckSummary = () => {
    let color = useState(' #C53030')
    let faction = useState({ rebel })
    return (
        <div style={padding}>
            <div className='deck-summary-outline'>
                <div style={NFColor} className='deck-name-frame'>
                    <div ><img className='deck-name-background' src={rebel} /></div>
                    <div style={padding}>
                        <div style={deckControls}>
                            <img src={deck} />
                            <img src={deleteDeck} />
                        </div>
                        <p className='space-between-15' />
                        <p className='card-name'>Name</p>
                    </div>
                </div>

                <div style={dataControls}>
                    <p style={largeText}>10</p>
                    <p style={total}>total cards</p>
                </div>

            </div>
        </div>
    )
}

const padding = {
    padding: "15px"
}

const NFColor = {
    background: "#C53030"
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