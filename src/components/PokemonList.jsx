import { useState, useEffect} from 'react'
import PokemonChar from './PokemonChar';

export default function PokemonList({pokemonList =''}) {

    // const [isLoading, setIsLoading] = useState(true)
    
    // if (isLoading) return <p className='text-center mt-8 '>Carregando Pokemons...</p>;
    
    if (!Array.isArray(pokemonList)) {
        return <p className="text-center mt-8 text-red-500">Erro: Lista inválida</p>;
    }

    if (pokemonList.length === 0) {
    return <p className="text-center mt-8 text-gray-500">Nenhum Pokémon encontrado</p>;
    }
    
    return (
        <div className="flex justify-center px-4 ">
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {pokemonList.map((item, index) => (
                    <PokemonChar 
                        key={index}
                        name={item.name}
                        image={item.image}
                        type={item.type}
                    />

                ))}
            </div>
        </div>
    )
}