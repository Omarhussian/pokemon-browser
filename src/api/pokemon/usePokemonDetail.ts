import { useQuery } from "@tanstack/react-query";
import { fetchPokemonDetail } from "./fetchPokemonDetail";
import type { PokemonDetail } from "../../types/pokemon/details";

export const usePokemonDetail = (id: string | number) => {
  return useQuery<PokemonDetail>({
    queryKey: ["pokemonDetail", id],
    queryFn: () => fetchPokemonDetail(id),
    enabled: !!id, 
    staleTime: 1000 * 60 * 5, 
  });
};