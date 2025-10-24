import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "./fetchPokemonList";
import type { PokemonListResponse } from "../../types/pokemon/list";

export const useInfinitePokemonList = (limit: number) => {
  return useInfiniteQuery<PokemonListResponse>({
    queryKey: ["pokemonListInfinite", limit],
    queryFn: ({ pageParam = 0 }) => fetchPokemonList(limit, pageParam as number),
    getNextPageParam: (lastPage: PokemonListResponse, allPages: PokemonListResponse[]) => {
      const nextOffset = allPages.length * limit;
      return lastPage.next ? nextOffset : undefined;
    },
    initialPageParam: 0,
    staleTime: 1000 * 60 * 2,
  });
};