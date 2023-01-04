import { useStore } from './../HouseStore'
import { Window } from '../types'
import WindowComp from './Window'

interface IProps {
    floor: number
    room: number
}
function Room({ floor, room }: IProps) {
    const house = useStore((state) => state.house)
    const myFloor = house.floors[floor]
    const myRoom = myFloor.rooms[room]
    const updateHouse = useStore((state) => state.updateHouse)

    // console.log('floor', floor)
    // console.log('myRoom', myRoom)
    // console.log('house', house)

    const onDeleteRoomClicked = () => {
        house.floors[floor].rooms.splice(room, 1)
        updateHouse(house)
    }

    const onAddWindowClicked = () => {
        const window: Window = {
            style: '',
            glass: 'tempered',
        }
        house.floors[floor].rooms[room].windows.push(window)
        updateHouse(house)
    }

    return (
        <>
            <div className="room">
                <div className="row">
                    <h3>{myRoom.type}</h3>
                    <button onClick={onDeleteRoomClicked}>delete {myRoom.type}</button>
                </div>

                <button onClick={onAddWindowClicked}>add window</button>
                {myRoom.windows.map((window, i) => (
                    <WindowComp key={i} floor={floor} room={room} window={i}></WindowComp>
                ))}
                <div className="roomDivider"></div>
            </div>
        </>
    )
}

export default Room
