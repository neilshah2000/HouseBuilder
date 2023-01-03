export interface House {
    foundation: 'brick' | 'slab' | 'concrete'
    size: number
    floors: Floor[]
    roof: 'straw' | 'thatched' | 'flat'
    garden: string[] // 3rd party values
}

export interface Floor {
    rooms: Room[]
}

export interface Room {
    size: number
    floor: 'wood' | 'carpet'
    windows: Window[]
}

export interface Bedroom extends Room {
    beds: number
}

export interface Lounge extends Room {
    sofa: boolean
}

export interface Diner extends Room {
    table: boolean
    chairs: number
}

export interface Kitchen extends Room {
    fridge: boolean
    dishwasher: boolean
}

export interface Bathroom extends Room {
    bath: boolean
    shower: boolean
}

export interface Office extends Room {
    desk: boolean
    chair: boolean
}

export interface Window {
    style: 'bay' | 'flat' | 'full' | string
    glass: 'tempered' | 'double' | 'triple'
}
