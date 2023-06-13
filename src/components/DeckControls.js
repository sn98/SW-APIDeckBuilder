import React from 'react'

const DeckControls = () => {
    return (
        <div className='ontop'>
            <img src={addSelected ? addbuttonSelected : addbutton} onClick={() => addSelected ? addFunction(false) : addFunction(true)} />
            <img src={addSelected ? addbuttonSelected : addbutton} onClick={() => addSelected ? addFunction(false) : addFunction(true)} />
        </div>
    )
}

export default DeckControls