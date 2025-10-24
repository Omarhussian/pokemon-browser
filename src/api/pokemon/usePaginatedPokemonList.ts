import { useQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "./fetchPokemonList";
import type { PokemonListResponse } from "../../types/pokemon/list";

export const usePaginatedPokemonList = (limit: number, offset: number) => {
  return useQuery<PokemonListResponse>({
    queryKey: ["pokemonListPaginated", limit, offset],
    queryFn: () => fetchPokemonList(limit, offset),
    staleTime: 1000 * 60 * 2,
  });
};