import TextInput from "@/components/TextInput"
import { useEffect, useState } from "react"

let awaitTime; 

export default function Header({ onSearch }) {

    const [input, setInput] = useState('');

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') onSearch(input); // ← envia a string pro pai
    };

    return (
        <div className="fixed top-0 left-0 w-full h-16 flex justify-center items-center px-6
        bg-zinc-600 shadow-md z-50">
            <div className="grid grid-cols-3">

            <h3 className="my-auto font-bold shadow-2xs">
                Pokedex 
            </h3>

            <TextInput 
                type = 'Text'
                placeholder = 'Pesquisar' 
                value = {input}
                onChange = {(e) => setInput(e.target.value)}
                onKeyDown = {handleKeyDown} 
                />
            </div>
        </div>
    )
}
