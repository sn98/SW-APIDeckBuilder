import { React, useState } from 'react'
import rebelAlliance from '../assets/buttons/rebelAlliance.svg'
import rebelAllianceSelected from '../assets/buttons/rebelAllianceSelected.svg'
import jediOrder from '../assets/buttons/jediOrder.svg'
import jediOrderSelected from '../assets/buttons/jediOrderSelected.svg'
import galacticEmpire from '../assets/buttons/galacticEmpire.svg'
import galacticEmpireSelected from '../assets/buttons/galacticEmpireSelected.svg'
import noFaction from '../assets/buttons/noFaction.svg'
import noFactionSelected from '../assets/buttons/noFactionSelected.svg'

const AddDeck = ({ addFunction, addDeck }) => {
    const [error, setError] = useState('')
    const [selectedElement, setSelection] = useState(null)
    const [name, setName] = useState('')
    const something = (event) => {
        if (event.key === "Enter") {
            event.preventDefault()
            if (selectedElement != null && name != '') {
                setError('')
                addFunction(false)
                addDeck()
            } else if (selectedElement === null && name != '') {
                setError('Please select a faction ')
            } else if (selectedElement != null && name === '') {
                setError('Please ender a name')
            } else {
                setError('Please ender a name and select a faction')
            }
        }
    }

    return (
        <div>
            <form className='add-deck-form'>
                <div style={showFactions}>
                    <label>Faction</label>
                    <div >
                        <img style={imgBorder} src={selectedElement === 'rebel' ? rebelAllianceSelected : rebelAlliance} onClick={() => setSelection('rebel')} />
                        <img style={imgBorder} src={selectedElement === 'jedi' ? jediOrderSelected : jediOrder} onClick={() => setSelection('jedi')} />
                        <img style={imgBorder} src={selectedElement === 'empire' ? galacticEmpireSelected : galacticEmpire} onClick={() => setSelection('empire')} />
                        <img style={imgBorder} src={selectedElement === 'no' ? noFactionSelected : noFaction} onClick={() => setSelection('no')} />
                    </div>
                </div>
                {error != '' && <p style={errorMsg}>{error}</p>}
                <div>
                    <label style={label}>Deck Name</label>
                    <input style={BarStyle} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Deck Name" onKeyDown={(e) => something(e)}></input>
                </div>
            </form >
        </div >
    )
}

const showFactions = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
}
const BarStyle = {
    width: "236px",
    background: "#FFFFFF",
    border: "none",
}
const label = {
    fontSize: "10px"
}
const imgBorder = {
    padding: "2px"
}
const errorMsg = {
    color: "red",
    fontSize: "10px"
}

export default AddDeck