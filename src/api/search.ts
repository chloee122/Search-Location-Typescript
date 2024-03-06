import Place from "./Place"

interface SearchResponse {
    features : {
        geometry: {
            coordinates: number[]
        },
        properties: {
            display_name: string,
            place_id: number
        }
    }[]
}

export const  search = async (term:string) => {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${term}&format=geojson&addressdetails=1&layer=address&limit=5`)
    const data: SearchResponse = await res.json()

    const places: Place[] = data.features.map(place => {
        return {
            id: place.properties.place_id,
            name: place.properties.display_name,
            longitude: place.geometry.coordinates[0],
            lahtitude: place.geometry.coordinates[1]
        }
    })

    return places
    
} 