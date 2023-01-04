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

    // updateFloor: (floor: number, updated: Floor) => set((state) => {
    //     const changed = {
    //         ...state,
    //         house: {
    //             ...state.house,
    //             floors: {
    //                 ...state.house.floors
    //             }
    //         }
    //     }
    //     return {

    //     }
    // }),
}))
