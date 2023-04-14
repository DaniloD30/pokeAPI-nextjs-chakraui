import { Flex, Image } from "@chakra-ui/react";

import { IPokemonCardArtworkProps } from "@/types";

function CardArtworkPokemon({ artworkUrl }: IPokemonCardArtworkProps) {
  return (
    <div data-testid="artwork-pokemon-testid">
      <Flex justify="center" align="center">
        <Image src={artworkUrl} alt="" maxW="90%" />
      </Flex>
    </div>
  );
}

export default CardArtworkPokemon;
