type PokedexItemProp = {
   id: number,
   pokemonName: string
}

const PokedexItem = (props:PokedexItemProp) => {
   
   return (
      <div>
         <div>{props.id}</div>
         <div>{props.pokemonName}</div>
      </div>
   )
}

export default PokedexItem;