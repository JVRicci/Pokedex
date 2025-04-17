
import api from '@/lib/axios'

export const pokemonListQuery = async (pokemonName = '') => {
    if (pokemonName.trim() === ''){
        try{
            const response = await api.get(pokemonName == '' ?  `/pokemon/${pokemonName}` : '/pokemon')
            const results = response.data.results
            const promises = results.map (pokemon => api.get(`/pokemon/${pokemonName ? pokemonName : pokemon.name}`)) 

            const details = await Promise.all(promises)

            const pokemonData = details.map(res => ({
                name: res.data.name,
                image: res.data.sprites.front_default,
                type: res.data.types.map(t => t.type.name)
            }))
            
            return pokemonData
        }
        catch(err){
            console.log("Erro na requisição:" ,err)
        }
    }

    else {
        try{
            const response = await api.get(`/pokemon/${pokemonName}`)
            const results = response.data

            const pokemonData = {

                name: results.name,
                image: results.sprites.front_default,
                type: results.types.map(t => t.type.name)
            }
            
            return [pokemonData]
        }
        catch(err){
            return []
        }
    }
}

