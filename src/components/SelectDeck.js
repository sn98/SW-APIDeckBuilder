import React from 'react'

const SelectDeck = ({ decks, addToDeck, card }) => {
  return (
    <div className='select-deck-outline'>
      <div>
        <p className='select-deck-title'> Select a deck</p>
        <hr className='card-line' />
      </div>
      <div>
        {decks.map((deck) => (
          <div key={deck.id}>
            <p className='space-between-10' />
            <div className='select-deck-listing' onClick={() => addToDeck(deck.id, card)}>
              <p className='select-deck-name'>{deck.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default SelectDeck