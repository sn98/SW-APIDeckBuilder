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
                <div id='father' style={NFColor} className='container deck-name-frame'>
                    <div id='child' ><img className='deck-name-background' src={rebel} /></div>
                    <div style={padding}>
                        <div style={deckControls}>
                            <img src={deck} />
                            <img src={deleteDeck} />
                        </div>
                        <p className='space-between-15' />
                        <p className='card-name'>Name</p>
                    </div>
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
export default DeckSummary