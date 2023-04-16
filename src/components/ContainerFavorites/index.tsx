import { Flex, Text } from "@chakra-ui/react";

import { useAppSelector } from "@/redux/store/hook";
import CardPokemon from "@/components/CardPokemon";

import { favoritesPokemons } from "@/redux/slices/pokemons";

export default function List() {
  const favPokemons = useAppSelector(favoritesPokemons);
  return (
    <>
      <Flex
        justify="center"
        alignItems="center"
        minHeight="90vh"
        wrap="wrap"
        backgroundColor="#ffcb05"
      >
        {favPokemons.length === 0 ? (
          <Text
            fontSize={{ base: "25px", md: "30px", lg: "40px", xl: "50px" }}
            as="b"
            fontFamily="fantasy"
          >
            Click on a pokemon in the all tab and favorite it!
          </Text>
        ) : (
          favPokemons.map((fav) => (
            <CardPokemon
              data-testid="card-pokemon-fav"
              key={fav.name}
              name={fav.name}
              url={fav.url}
              type="favorite"
            />
          ))
        )}
      </Flex>
    </>
  );
}
