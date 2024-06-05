import PokedexItem from "../molecules/PokedexItem";
import { usePokedex } from "../../API/PokedexAPI";

type PokemonListProps = {
   limit: number;
   offset: number;
}

const PokedexList = ({ limit, offset }: PokemonListProps) => {
   const { pokemons, loading, error, loadMorePokemons } = usePokedex(limit, offset);

   return (
      <div>
         {pokemons.map((pokemon, index) => (
            <PokedexItem pokemonName={pokemon.name} key={pokemon.id} id={pokemon.id} />
         ))}
         <button onClick={loadMorePokemons}>Load More</button>
      </div>
   );
}

export default PokedexList;
