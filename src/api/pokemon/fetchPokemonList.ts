import axiosInstance from "../axiosInstance";
import type { PokemonListResponse } from "../../types/pokemon/list";

export const fetchPokemonList = async (limit: number, offset: number) => {
  const { data } = await axiosInstance.get<PokemonListResponse>(
    `pokemon?limit=${limit}&offset=${offset}`
  );
  return data;
};