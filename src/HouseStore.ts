import create from 'zustand'
import { House } from './types'

interface StoreState {
    house: House
    actions: {}
}

const useStore = create<StoreState>()((set, get) => ({
    house: {
        foundation: 'brick',
        size: 0,
        floors: [],
        roof: 'flat',
        garden: [],
    },
    actions: {
        // TODO: everything re-renders
        updateHouse: (updated: House) => {
            set((state) => ({ house: updated }))
        },
    },
}))

export const useHouse = () => useStore((state) => state.house)

export const useHouseActions = () => useStore((state) => state.actions)
