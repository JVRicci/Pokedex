import { useState, useEffect} from 'react'
import PokemonList from '@/components/PokemonList'
import Header from './components/Header'
import pokemonListQuery  from '@/lib/api'

export default function App() {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
      const fetchAllPokemon = async () => {
              try {
                  setPokemonList(await pokemonListQuery())
              } catch (error) {
                  console.error(error)
              }
          }
          setPokemonList(fetchAllPokemon())
      }, []);

      const handleChange = async (name) => {
        if (!name || name.trim() === '') {
          fetchAllPokemons(); // ← volta pra lista completa
          return;
        }
        try {
          const res = await pokemonListQuery(name)
          setPokemonList(res);
        } catch (err) {
          setPokemonList([]); // limpa se não encontrar
        }
    };
      

  return (
    <div className='min-h-screen flex flex-col'>
        <Header onSearch={handleChange}/>
      <div className='w-screen pt-16 flex justify-center px-6'>
        <div className='max-w-5xl w-full '>
          <PokemonList pokemonList={pokemonList}/>
        </div>
      </div>
    </div>
  )
}

