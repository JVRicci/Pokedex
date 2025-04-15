
export default function PokemonChar(props) {
  return (
    <div
        key={props.name}
        className="group bg-zinc-900 flex flex-col items-center justify-center 
        p-8 rounded-full my-8 mx-8 max-h-44 max-w-64
        transition-transform duration-300 ease-in-out hover:scale-150"
    >

        <img 
            src={props.image} alt={props.name}  
            className='transition-transform duration-300 group-hover:scale-120'
        />

        <div
            className="text-sm font-semibold
            transition-transform duration-300
            group-hover:scale-150 ">
            {props.name[0].toUpperCase()+props.name.slice(1)}
        </div>

        <div
            className="text-xs/8
            transition-transform duration-400 invisible
            group-hover:scale-150 group-hover:visible group-hover:opacity-60">
            {
                props.type.map((value, index) => {
                    const isLast = index === props.type.length - 1;

                    let typeList =''
                    value = value[0].toUpperCase() +value.slice(1)
                    typeList = typeList + (isLast ? `${value}` : `${value}, `)
                    return typeList
                })
            }
        </div>
    </div>
  )
}
