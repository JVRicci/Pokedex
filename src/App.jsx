import { useState, useEffect} from 'react'
import PokemonList from '@/components/PokemonList'
import Header from './components/Header'
import {pokemonListQuery}  from '@/lib/api'

export default function App() {
  
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
      handleChange()
    }, []);

    const handleChange = async (name = '') => {
      try {
          setPokemonList(await pokemonListQuery(name))
      } catch (error) {
          console.error(error)
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

