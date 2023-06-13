import React from 'react'
import addbutton from '../assets/buttons/addButton.svg'
import addbuttonSelected from '../assets/buttons/addButtonSelected.svg'

const CardControls = ({ addSelected, addFunction }) => {
    return (
        <div>
            <img className='ontop' src={addSelected ? addbuttonSelected : addbutton} onClick={() => addSelected ? addFunction(false) : addFunction(true)} />
        </div>
    )
}

export default CardControls