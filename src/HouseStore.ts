import create from 'zustand'
import { House, Floor } from './types'

interface StoreState {
    house: House
    updateHouse: (h: House) => void
}

export const useStore = create<StoreState>()((set, get) => ({
    house: {
        foundation: 'brick',
        size: 0,
        floors: [],
        roof: 'flat',
        garden: [],
    },
    updateHouse: (updated: House) => set((state) => ({ ...state, house: { ...updated } })),
    // break down nested state to allow individual nested slices to re-render independantly
    // https://www.pluralsight.com/guides/deeply-nested-objectives-redux
}))

//////// local storage //////////

const LOCALSTORAGE_KEY = 'housebuilder'

export const getHouseData = () => {
    const localDataString = localStorage.getItem(LOCALSTORAGE_KEY)
    if (localDataString) {
        const houseObj = JSON.parse(localDataString)
        return houseObj
    } else {
        return null
    }
}

export const setHouseData = (newData: House) => {
    const localDataString = JSON.stringify(newData)
    localStorage.setItem(LOCALSTORAGE_KEY, localDataString)
}
