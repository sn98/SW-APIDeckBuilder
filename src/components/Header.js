import { React, useState } from 'react'
import NameTag from './NameTag'

const Header = (props) => {
    let [showDecks, switchTabs = (isDecks) => {
        showDecks = isDecks
    }] = useState(false);

    const goToDecks = () => {
        switchTabs(true)
        props.updateTab(true)
    }

    const goToCards = () => {
        switchTabs(false)
        props.updateTab(false)
    }
    return (
        <div >
            <div className="header">
                <div>
                    <button className='iconbtn' onClick={goToCards} style={{ backgroundColor: !showDecks ? '#fff' : '#B8B8B8' }}>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_12_2576)">
                                <path d="M10 12.5V9.99998C10 9.60216 9.84196 9.22063 9.56066 8.93932C9.27936 8.65802 8.89782 8.49998 8.5 8.49998V8.49998C8.10218 8.49998 7.72064 8.65802 7.43934 8.93932C7.15804 9.22063 7 9.60216 7 9.99998V13.5C7.05225 14.001 7.21362 14.4844 7.47277 14.9163C7.73192 15.3482 8.08255 15.7181 8.5 16H12L13.348 11.508C13.4473 11.1749 13.4587 10.8218 13.381 10.483L12.181 5.27398C12.0663 4.77664 11.7658 4.34196 11.341 4.05898L10.5 3.49998" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.5 6.99998V0.999985H2.5V12H4.5" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_12_2576">
                                    <rect width="16" height="16" fill="white" transform="translate(0 0.499985)" />
                                </clipPath>
                            </defs>
                        </svg>
                        &nbsp;All Cards

                    </button>
                    <button className='iconbtn' onClick={goToDecks} style={{ backgroundColor: showDecks ? '#fff' : '#B8B8B8' }}>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1.99998L15.5 6.49998L8 11L0.5 6.49998L8 1.99998Z" stroke="#3B3B3B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14 9.59999L15.5 10.5L8 15L0.5 10.5L2 9.59999" stroke="#3B3B3B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        &nbsp;Decks
                    </button>
                </div>
                <h4 >{props.title}</h4>
                <NameTag name='Sean Gayle'></NameTag>

            </div>
            <hr style={line} />
        </div >
    )
}

Header.defaultProps = {
    title: "SW-API Deck Builder"
}
const line = {
    background: "grey",
    height: "1px",
    border: "none",
}

export default Header
