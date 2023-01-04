import { useStore } from './../HouseStore'
import { Bedroom, Lounge } from '../types'
import Room from './../components/Room'

interface IProps {
    floor: number
}
function Floor({ floor }: IProps) {
    // const floorData = useStore((state) => state.house.floors[floor])
    const house = useStore((state) => state.house)
    const myFloor = house.floors[floor]
    const updateHouse = useStore((state) => state.updateHouse)

    // console.log('floor', floor)
    // console.log('myFloor', myFloor)
    // console.log('house', house)

    const onDeleteFloorClicked = () => {
        house.floors.splice(floor, 1)
        updateHouse(house)
    }

    const onAddBedroomClicked = () => {
        const bedroom: Bedroom = {
            size: 0,
            floor: 'wood',
            windows: [],
            type: 'bedroom',
            beds: 0,
        }
        // floorData.rooms.push(bedroom)
        house.floors[floor].rooms.push(bedroom)
        updateHouse(house)
    }

    const onAddLoungeClicked = () => {
        const bedroom: Lounge = {
            size: 0,
            floor: 'wood',
            windows: [],
            type: 'lounge',
            sofa: false,
        }
        // floorData.rooms.push(bedroom)
        house.floors[floor].rooms.push(bedroom)
        updateHouse(house)
    }

    return (
        <>
            <h3 key={floor}>floor {floor}</h3>
            <button onClick={onDeleteFloorClicked}>delete floor</button>
            <button onClick={onAddBedroomClicked}>add bedroom</button>
            <button onClick={onAddLoungeClicked}>add lounge</button>
            {myFloor.rooms.map((room, i) => (
                <Room key={i} floor={floor} room={i}></Room>
            ))}
        </>
    )
}

export default Floor
