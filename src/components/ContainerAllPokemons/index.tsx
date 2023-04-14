import { Flex } from "@chakra-ui/react";
import CardPokemon from "@/components/CardPokemon";
import { usePokemons } from "@/hooks/querys/usePokemons";
import { useState } from "react";
import PaginationCard from "@/components/Pagination";
import SkeletonLoader from "@/components/SkeletonLoader";

export default function ContainerAllPokemons() {
  const [page, setPage] = useState<number>(0);
  const { data, isLoading } = usePokemons(page);

  const handleChangePage = (type: "next" | "previous") => {
    let total = data?.count ? data.count : 0;
    if (type === "next") {
      if (page === total / 10) return;
      setPage(page + 1);
    }
    if (type == "previous") {
      if (page === 0) return;
      setPage(page - 1);
    }
  };

  return (
    <>
      {isLoading ? (
        <Flex
          justify="center"
          alignItems="center"
          minHeight="100vh"
          wrap="wrap"
          backgroundColor="#ffcb05"
        >
          <SkeletonLoader h="50px" w="200px" />
        </Flex>
      ) : (
        <>
          <Flex
            justify="center"
            alignItems="center"
            minHeight="100vh"
            wrap="wrap"
            backgroundColor="#ffcb05"
          >
            {data?.results.map((pokemon) => (
              <CardPokemon
                key={pokemon.url}
                name={pokemon.name}
                url={pokemon.url}
                type="all"
              />
            ))}
            <PaginationCard
              count={page}
              total={data?.count}
              handleChangePage={handleChangePage}
            />
          </Flex>
        </>
      )}
    </>
  );
}
