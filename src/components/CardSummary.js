import { React, useState } from 'react'
import card from '../assets/icons/whiteCard.svg'
import addbutton from '../assets/buttons/addButton.svg'
import addbuttonSelected from '../assets/buttons/addButtonSelected.svg'
import male from '../assets/icons/male.svg'
import female from '../assets/icons/female.svg'
import planet from '../assets/icons/planet.svg'
import vehicles from '../assets/icons/vehicles.svg'
import starships from '../assets/icons/starships.svg'
import noFaction from '../assets/icons/noFaction.svg'
import SelectDeck from './SelectDeck'
const CardSummary = ({ data, decks, addToDeck, removeCard }) => {
    const [addSelected, addFunction] = useState(null)
    const addCardToDeck = (id, card) => {
        removeCard(card.id)
        console.log('we here')
        addToDeck(id, card)
        addFunction(false)
    }
    return (
        <div style={padding}>
            <div className='card-outline-summary'>
                <div className='name-frame'>
                    <div style={padding}>
                        <div style={cardControls}>
                            <img src={card} />
                            <img src={addSelected ? addbuttonSelected : addbutton} onClick={() => addSelected ? addFunction(false) : addFunction(true)} />

                        </div>
                        {addSelected && <SelectDeck decks={decks} addToDeck={addCardToDeck} card={data} />}
                        <p className='space-between-15' />
                        <p className='card-name'>{data.name}</p>
                    </div>
                </div>
                <p className='space-between-10' />

                <div className='card-details-group'>
                    <div>
                        <div className='card-title-box'>
                            <div className='name-image'>
                                <img src={data.gender === 'male' ? male : data.gender === 'female' ? female : noFaction} />
                                &nbsp;<p className='summary-text-2'>{data.birth}</p>
                            </div>
                            <p className='summary-text-2'>{data.species.length > 0 ? data.species[0] : "None"}</p>
                        </div>
                        <hr className='card-line' />
                    </div>
                    <br />
                    <div className='card-summary-box'>
                        <div className='name-image'>
                            <img src={planet} />
                            &nbsp;<p className='summary-text'>HOMEWORLD</p>
                        </div>
                        <p className='summary-text-2'>{data.homeworld}</p>
                    </div>
                    <p className='space-between-10' />
                    <div className='card-summary-box'>
                        <div className='name-image'>
                            <img src={vehicles} />
                            &nbsp;<p className='summary-text'>VEHICLES</p>
                        </div>
                        <p className='summary-text-2'>{data.vehicles.length}</p>
                    </div>
                    <p className='space-between-10' />
                    <div className='card-summary-box'>
                        <div className='name-image'>
                            <img src={starships} />
                            &nbsp;<p className='summary-text'>STARSHIPS</p>
                        </div>
                        <p className='summary-text-2'>{data.starships.length}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const padding = {
    padding: "15px"
}
const cardControls = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
}

export default CardSummary
