import axios, { AxiosResponse } from "axios";
/*

Pokemon class
  - one pokemon has name, id, types and moves
  

List of goals:
  - create a function to get all information of a pokemon from result of getSinglePokemon ✅
  - get a List of types from a pokemon, assing to a variable called types ✅
  - get a List of moves from a pokemon, you can only choose 4 moves by pokemon, those moves should be aleatory ✅
  - fill Moves with missing data from Types you can get the information from url of the move. ✅
  - re-write decortator to get new pokemons Ids in PokemonTrainer class  ✅
*/




export function getSinglePokemon(id: string | number): Promise<AxiosResponse<Pokemon>> {
  return axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
}

function getNewPokemons<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    listOfIds = generateRandomIds(4,10,20);
  }
}

function generateRandomIds(length, minValue, maxValue){
  const randomIds = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    randomIds.push(randomNumber);
  }
  return randomIds;
}


type Move = {
  move: {
    name: string;
    url: string;
    type?: string;
    damage?: number; // power
    powerPoints?: number; // pp
    accuracy?: number;
  },
  version_group_details?: object
};

type Type = {
  slot:number
  type: {
    name: string;
    url: string;
  }
};

export class Pokemon {
  name: string = '';
  id: number = 0;
  moves: Move[] = [];
  types: Type[] = [];

  constructor(pokemonResult: Pokemon) {
    this.buildFieldsPokemon(pokemonResult);
  }

  buildFieldsPokemon(pokemon: Pokemon) {
    this.name = pokemon.name;
    this.id = pokemon.id;
    this.types = pokemon.types
    // you can only choose four moves from the list of moves
    this.moves = this.pickFourMoves(pokemon.moves);
  }

  displayInfo() {
    console.log(`==========================`);
    console.log(`${this.id} ${this.name}`);
    this.types.forEach(type => {
      console.log(`Type: ${type.type.name}`);
    });
    this.moves.forEach(move => {
      console.log(`Move: ${move.move.name}`);
    });
  }

  // pick 4 movements
  pickFourMoves(moves: Move[]): Move[]{
    //sorts the array randomly and then picks the first 4 elements
    return moves.sort(() => Math.random() - 0.5).slice(0,3);
  }

}

@getNewPokemons
export class PokemonTrainer {
  name: string;
  pokemons: Pokemon[] = [];
  listOfIds: number[] = [2,4];
  constructor(name: string) {
    this.name = name;
  }

  async getPokemons() {
    const listPokemons = this.listOfIds.map(id => getSinglePokemon(id));
    const results = await Promise.all(listPokemons)
    results.forEach(result => {
      this.pokemons.push(new Pokemon(result.data));
    });
  }

  async showTeam() {
    await this.getPokemons();
    console.log('Trainer:', this.name);
    this.pokemons.forEach(pokemon => {
      pokemon.displayInfo();
    });
  }
}
