type PokemonImageProps = {
  pokemonId: number | undefined;
};

const PokemonImage = (props: PokemonImageProps) => {
  return (
    <div>
      {props.pokemonId ? (
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemonId}.png `}
          alt="shadow"
          width={500}
        />
      ) : (
        <div>image not found</div>
      )}
    </div>
  );
};

export default PokemonImage;
