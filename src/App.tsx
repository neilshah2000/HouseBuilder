import { useEffect, ChangeEvent } from 'react'
import { useStore } from './HouseStore'
import Dropdown from './components/Dropdown'
import { House, Foundations, Roofs } from './types'
import Input from './components/Input'
import Floor from './components/Floor'

function App() {
    // where to store state?? react or zustand

    const house = useStore((state) => state.house)
    const updateHouse = useStore((state) => state.updateHouse)
    console.log('house', house)

    const onFoundationChange = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value)
        const newFoundation = event.target.value as Foundations
        house.foundation = newFoundation
        updateHouse(house)
    }

    const onRoofChange = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value)
        const newRoof = event.target.value as Roofs
        house.roof = newRoof
        updateHouse(house)
    }

    const onHouseSizeInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        const newSize = event.target.value
        house.size = parseInt(newSize)
        updateHouse(house)
    }

    const onAddFloorClicked = () => {
        house.floors.push({ rooms: [] })
        updateHouse(house)
    }

    return (
        <>
            <h1>House Builder</h1>
            <Dropdown
                options={['brick', 'slab', 'concrete']}
                label="foundation"
                id="foundation"
                onChange={onFoundationChange}
                value={house.foundation}
            ></Dropdown>
            <Dropdown options={['straw', 'thatched', 'flat']} label="roof" id="roof" onChange={onRoofChange} value={house.roof}></Dropdown>
            <Input label="size" id="houseSize" value={house.size.toString()} onChange={onHouseSizeInputChange}></Input>
            <button onClick={onAddFloorClicked}>add floor</button>
            {house.floors.map((floor, i) => (
                <Floor key={i} floor={i}></Floor>
            ))}
        </>
    )
}

export default App
