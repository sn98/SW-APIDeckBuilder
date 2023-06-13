import React from 'react';
import card from '../assets/icons/whiteCard.svg';
import male from '../assets/icons/male.svg';
import female from '../assets/icons/female.svg';
import planet from '../assets/icons/planet.svg';
import vehicles from '../assets/icons/vehicles.svg';
import starships from '../assets/icons/starships.svg';
const CardDetail = ({ data }) => {
    return (
        <div style={padding}>
            <div className='card-outline-detail'>
                <div className='name-frame'>
                    <div style={padding}>
                        <div style={addCardSection}>
                            <img src={card} />
                        </div>
                        <p className='space-between-15' />
                        <p className='space-between-15' />
                        <p className='card-name'>{data.name}</p>
                    </div>
                </div>
                <p className='space-between-10' />

                <div className='card-details-group'>
                    <div>
                        <div className='card-title-box-large'>
                            <div className='name-image'>
                                <img src={data.gender === 'm' ? male : female} />
                                &nbsp;<p className='summary-text-2'>19BBY</p>
                            </div>
                            <p className='summary-text-2'>{data.species}</p>
                        </div>
                        <hr className='card-line-large' />
                    </div>
                    <br />
                    <div className='card-details-box'>
                        <div className='name-image'>
                            <img src={planet} />
                            &nbsp;<p className='summary-text'>HOMEWORLD</p>
                        </div>
                        <p className='summary-text-2'>{data.homeworld}</p>
                    </div>
                    {data.vehicles.map((vehicle) => (
                        <div key={vehicle.id}>
                            <p className='space-between-10' />
                            <div className='card-details-box'>
                                <div className='name-image'>
                                    <img src={vehicles} />
                                    &nbsp;<p className='summary-text'>VEHICLE</p>
                                </div>
                                <p className='summary-text-2'>{vehicle}</p>
                            </div>
                        </div>
                    ))}
                    {data.starships.map((starship) => (
                        <div key={starship.id}>
                            <p className='space-between-10' />
                            <div className='card-details-box'>
                                <div className='name-image'>
                                    <img src={starships} />
                                    &nbsp;<p className='summary-text'>STARSHIP</p>
                                </div>
                                <p className='summary-text-2'>{starship}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
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

export default CardDetail
