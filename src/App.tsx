import { useEffect, ChangeEvent } from 'react'
import { useStore, getHouseData, setHouseData } from './HouseStore'
import Dropdown from './components/Dropdown'
import { House, Foundations, Roofs } from './types'
import Input from './components/Input'
import Floor from './components/Floor'

function App() {
    // where to store state?? react or zustand

    const house = useStore((state) => state.house)
    const updateHouse = useStore((state) => state.updateHouse)
    console.log('house', house)

    useEffect(() => {
        const savedHouseData = getHouseData()
        if (savedHouseData === null) {
            console.log('no saved data')
        } else {
            console.log('saved data')
            updateHouse(savedHouseData)
        }
    }, [])

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

    const onSaveClicked = () => {
        setHouseData(house)
    }

    return (
        <>
            <div className="app">
                <h1>House Builder</h1>

                <div className="houseData">
                    <Dropdown
                        options={['brick', 'slab', 'concrete']}
                        label="foundation"
                        id="foundation"
                        onChange={onFoundationChange}
                        value={house.foundation}
                    ></Dropdown>
                    <Dropdown options={['straw', 'thatched', 'flat']} label="roof" id="roof" onChange={onRoofChange} value={house.roof}></Dropdown>
                    <Input label="size" id="houseSize" value={house.size.toString()} onChange={onHouseSizeInputChange}></Input>
                </div>

                <button onClick={onAddFloorClicked}>Add Floor</button>
                {house.floors.map((floor, i) => (
                    <Floor key={i} floor={i}></Floor>
                ))}

                <div className="saveSection">
                    <button onClick={onSaveClicked}>Save</button>
                </div>
            </div>
        </>
    )
}

export default App
