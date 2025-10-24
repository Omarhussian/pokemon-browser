export interface PokemonDetailType {
    slot: number;
    type: {
      name: string;
    };
  }
  
  export interface PokemonSprites {
    front_default: string;
  }
  
  export interface PokemonDetail {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: PokemonSprites;
    types: PokemonDetailType[];
  }