import { useStore } from './../HouseStore'
import Dropdown from './Dropdown'
import { ChangeEvent } from 'react'
import { Glasses } from '../types'

interface IProps {
    floor: number
    room: number
    window: number
}
function WindowComp({ floor, room, window }: IProps) {
    const house = useStore((state) => state.house)
    const myFloor = house.floors[floor]
    const myRoom = myFloor.rooms[room]
    const myWindow = myRoom.windows[window]
    const updateHouse = useStore((state) => state.updateHouse)

    // console.log('floor', floor)
    // console.log('myRoom', myRoom)
    console.log('myWindow', myWindow)
    // console.log('house', house)

    const onDeleteWindowClicked = () => {
        house.floors[floor].rooms[room].windows.splice(window, 1)
        updateHouse(house)
    }

    const onGlassChange = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value)
        const newGlass = event.target.value as Glasses
        myRoom.windows[window].glass = newGlass
        updateHouse(house)
    }

    return (
        <>
            <div className="window">
                <div className="row">
                    <h3>window</h3>
                    <button onClick={onDeleteWindowClicked}>delete window</button>
                </div>

                <Dropdown
                    options={['tempered', 'double', 'triple']}
                    label="glass"
                    id="glass"
                    onChange={onGlassChange}
                    value={house.floors[floor].rooms[room].windows[window].glass}
                ></Dropdown>
            </div>
        </>
    )
}

export default WindowComp
