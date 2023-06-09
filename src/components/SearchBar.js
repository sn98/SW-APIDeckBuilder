import React from 'react';
import search from '../assets/icons/search.svg';

const SearchBar = () => {
    return (
        <div className='search-box'>
            <div className="search-interior">
                <input
                    style={BarStyle}
                    key="deck-search-bar"
                    // value={keyword}
                    placeholder={"Search"}
                // onChange={(e) => onChange(e.target.value)}
                />
                <img src={search} />
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