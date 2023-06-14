import { React, useState } from 'react'
import lightDeleteButton from '../assets/buttons/lightDeleteButton.svg'
import moveButton from '../assets/buttons/moveButton.svg'
import darkMoveButton from '../assets/buttons/darkMoveButton.svg'
import SelectDeck from './SelectDeck'

const DeckControls = ({ deck, removeCard, data, decks, addToDeck, showTheCards }) => {
    const [addSelected, addFunction] = useState(null)
    const changeDecks = (id, card) => {
        console.log(id)
        console.log(deck.id)

        addToDeck(id, card)
        removeCard(deck.id, card.id)
        showTheCards(false)
        addFunction(false)
    }
    return (
        <div >
            <div className='ontop'>
                <img src={addSelected ? darkMoveButton : moveButton} onClick={() => addSelected ? addFunction(false) : addFunction(true)} />
                &nbsp;&nbsp;
                <img src={lightDeleteButton} onClick={() => removeCard(deck.id, data.id)} />
            </div>
            {addSelected && <SelectDeck decks={decks.filter((d) => deck.id !== d.id)} addToDeck={changeDecks} card={data} />}
        </div>
    )
}

export default DeckControls
