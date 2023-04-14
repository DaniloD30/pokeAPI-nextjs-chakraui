import { Flex, Text } from "@chakra-ui/react";

import { Colors } from "@/styles/theme";
import { IPokemonCardProps } from "@/types";

function CardNamePokemon({ name }: IPokemonCardProps) {
  return (
    <Flex
    data-testid="name-pokemon-testid"
      w="100%"
      h="3rem"
      justify="center"
      align="center"
      bg={Colors.lightGray}
    >
      <Text fontWeight="600" color="#3B4CCA">{name}</Text>
    </Flex>
  );
}

export default CardNamePokemon;
