import { React, useState } from 'react';
import searchIcon from '../assets/icons/search.svg';

const SearchBar = ({ search, size, isDecks }) => {
    const Size = {
        width: size <= global.width.lowerEnd ? "126px" : size >= global.width.lowerEnd && size <= global.width.upperEnd ? "224px" : "352px",
    }
    const DeckSize = {
        width: size <= global.width.lowerEnd ? "316px" : "352px",
    }
    const BarStyle = {
        width: size <= global.width.lowerEnd ? "105px" : size >= global.width.lowerEnd && size <= global.width.upperEnd ? "214px" : "342px",
        background: "#FFFFFF",
        border: "none",
        padding: "0.5rem",
    }
    const DeckStyle = {
        width: size <= global.width.lowerEnd ? "295px" : "342px",
        background: "#FFFFFF",
        border: "none",
        padding: "0.5rem",
    }

    const [keyword, setKeyword] = useState('')
    const dealWithInput = (word) => {
        setKeyword(word)
        if (word !== '') search("")
    }
    return (
        <div style={isDecks ? DeckSize : Size} className='search-box'>
            <div className="search-interior">
                <input
                    style={isDecks ? DeckStyle : BarStyle}
                    key="deck-search-bar"
                    value={keyword}
                    placeholder={"Search"}
                    onChange={(e) => dealWithInput(e.target.value)}
                />
                <img src={searchIcon} onClick={() => search(keyword)} />
            </div>
        </div>
    )
}



export default SearchBar