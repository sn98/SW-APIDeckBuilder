import React from 'react';
import SearchBar from './SearchBar';
import addbutton from '../assets/buttons/addButton.svg';

const DeckSearch = () => {
    return (
        <div style={searchrow}>
            <SearchBar />
            <img src={addbutton} />
        </div>
    )
}


const searchrow = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "50px",
}

export default DeckSearch
