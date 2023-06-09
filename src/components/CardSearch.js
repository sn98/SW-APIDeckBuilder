import React from 'react';
import SearchBar from './SearchBar';

const CardSearch = ({ filter, changefilter }) => {

    const az = () => changefilter('az')
    const young = () => changefilter('young')
    const old = () => changefilter('old')
    return (
        <div style={searchrow}>
            <SearchBar />
            <div style={padding}>
                <button className='iconbtn' onClick={az} style={{ backgroundColor: filter === 'az' ? '#fff' : '#B8B8B8' }}>
                    A to Z
                </button>
                <button className='iconbtn' onClick={young} style={{ backgroundColor: filter === 'young' ? '#fff' : '#B8B8B8' }}>
                    Youngest
                </button>
                <button className='iconbtn' onClick={old} style={{ backgroundColor: filter === 'old' ? '#fff' : '#B8B8B8' }}>
                    Eldest
                </button>
            </div>
        </div>
    )
}

const searchrow = {
    display: "flex",
    alignItems: "center",
    height: "50px",
    // flexDirection: "row",
}
const padding = {
    paddingLeft: "5px",
    // flexDirection: "row",
}

export default CardSearch