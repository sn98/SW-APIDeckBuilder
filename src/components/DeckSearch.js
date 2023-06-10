import { React, useState } from 'react';
import SearchBar from './SearchBar';
import addbutton from '../assets/buttons/addButton.svg';
import addbuttonSelected from '../assets/buttons/addButtonSelected.svg';
import AddDeck from './AddDeck';

const DeckSearch = ({ addDeck }) => {
    const [addSelected, addFunction] = useState(null)
    return (
        <div style={outside}>
            <div style={searchrow}>
                <SearchBar />
                <img src={addSelected ? addbuttonSelected : addbutton} onClick={() => addSelected ? addFunction(false) : addFunction(true)} />
            </div>
            {addSelected && <AddDeck addFunction={addFunction} addDeck={addDeck} />}
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
const outside = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
}



export default DeckSearch
