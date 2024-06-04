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
         <PokedexItem/>
      </div>
      
   )
}


export default PokedexList;