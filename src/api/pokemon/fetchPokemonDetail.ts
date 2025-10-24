import axiosInstance from "../axiosInstance";
import type { PokemonDetail } from "../../types/pokemon/details";

export const fetchPokemonDetail = async (id: string | number) => {
  const { data } = await axiosInstance.get<PokemonDetail>(`pokemon/${id}`);
  return data;
};