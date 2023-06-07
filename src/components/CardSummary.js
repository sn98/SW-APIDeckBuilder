import React from 'react'
import card from '../assets/icons/whiteCard.svg';
import addbutton from '../assets/buttons/addButton.svg';
import female from '../assets/icons/female.svg';
import planet from '../assets/icons/planet.svg';
import vehicles from '../assets/icons/vehicles.svg';
import starships from '../assets/icons/starships.svg';
const CardSummary = () => {
    return (
        <div className='card-outline'>
            <div className='name-frame'>
                <div style={padding}>
                    <div style={addCardSection}>
                        <img src={card} />
                        <img src={addbutton} />
                    </div>
                    <p className='space-between-15' />
                    <p className='card-name'>Name</p>
                </div>
            </div>
            <p className='space-between-10' />

            <div className='card-details-group'>
                <div>
                    <div className='card-title-box'>
                        <div className='name-image'>
                            <img src={female} />
                            &nbsp;<p className='summary-text-2'>19BBY</p>
                        </div>
                        <p className='summary-text-2'>Species</p>
                    </div>
                    <hr className='card-line' />
                </div>
                <br />
                <div className='card-details-box'>
                    <div className='name-image'>
                        <img src={planet} />
                        &nbsp;<p className='summary-text'>HOMEWORLD</p>
                    </div>
                    <p className='summary-text-2'>Planet</p>
                </div>
                <p className='space-between-10' />
                <div className='card-details-box'>
                    <div className='name-image'>
                        <img src={vehicles} />
                        &nbsp;<p className='summary-text'>VEHICLES</p>
                    </div>
                    <p className='summary-text-2'>0</p>
                </div>
                <p className='space-between-10' />
                <div className='card-details-box'>
                    <div className='name-image'>
                        <img src={starships} />
                        &nbsp;<p className='summary-text'>STARSHIPS</p>
                    </div>
                    <p className='summary-text-2'>0</p>
                </div>
            </div>
        </div >
    )
}

const padding = {
    padding: "15px"
}
const addCardSection = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
}

export default CardSummary
