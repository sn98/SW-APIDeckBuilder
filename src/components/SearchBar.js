import { React, useState } from 'react';
import searchIcon from '../assets/icons/search.svg';

const SearchBar = ({ search }) => {
    const [keyword, setKeyword] = useState('')
    return (
        <div className='search-box'>
            <div className="search-interior">
                <input
                    style={BarStyle}
                    key="deck-search-bar"
                    value={keyword}
                    placeholder={"Search"}
                    onChange={(e) => e.target.value.length === -1 ? search("") : setKeyword(e.target.value)}
                />
                <img src={searchIcon} onClick={() => search(keyword)} />
            </div>
        </div>
    )
}


const BarStyle = {
    width: "315px",
    background: "#FFFFFF",
    border: "none",
    padding: "0.5rem",
};

export default SearchBar