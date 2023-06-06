import React from 'react'

const NameTag = (props) => {
    return (
        <div>
            <button className='nametag'>{props.name}</button>
        </div>
    )
}

export default NameTag
