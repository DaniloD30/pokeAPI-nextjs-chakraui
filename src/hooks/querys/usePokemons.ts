import api from "@/services/api";
import { IPokemon } from "@/types";
import { useQuery } from "react-query";

type GetPokemonsResponse = {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: IPokemon[];
};

type Props = {
  page: number;
};

export async function getPokemons({
  page,
}: Props): Promise<GetPokemonsResponse> {
  const response = await api.get("pokemon", {
    params: {
      limit: 12,
      offset: page === 0 ? 0 : (Number(page + 1) - 1) * 10 + 10,
    },
  });

  const results: IPokemon[] = response.data?.results;
  const count = response.data?.count;

  return {
    results,
    count,
  };
}

export function usePokemons(page: number) {
  return useQuery([`pokemons`, page], () => getPokemons({ page }));
}
