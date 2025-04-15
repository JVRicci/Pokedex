
import api from '@/lib/axios'

const pokemonListQuery = async (pokemonName = '') => {
    try{
        const response = await api.get('/pokemon')
        const results = response.data.results
        const promises = pokemonName === '' ?
            results.map (pokemon => api.get(`/pokemon/${pokemon.name}`)) :
            api.get(`/pokemon/${pokemonName}`)

        const details = await Promise.all(promises)

        const pokemonData = details.map(res => ({
            name: res.data.name,
            image: res.data.sprites.front_default,
            type: res.data.types.map(t => t.type.name)
        }))
        
        return pokemonData
    }
    catch(err){
        console.log(err)
    }
}

export default pokemonListQuery