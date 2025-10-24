export interface PokemonDetailType {
    slot: number;
    type: {
      name: string;
    };
  }

export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
  };
  is_hidden: boolean;
}
  
export interface PokemonSprites {
  front_default: string;
}

export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: PokemonSprites;
  types: PokemonDetailType[];
  stats: PokemonStat[];
  abilities: PokemonAbility[];
}