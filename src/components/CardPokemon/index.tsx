import { Button, Flex, useToast } from "@chakra-ui/react";
import { Colors, BoxShadow } from "@/styles/theme";
import { IPokemon } from "@/types";
import CardIndex from "./CardIndex";
import CardNamePokemon from "./CardPokemonName";
import CardArtworkPokemon from "./CardArtworkPokemon";
import { useAppDispatch } from "@/redux/store/hook";
import { addPokemon, removePokemon } from "@/redux/slices/pokemons";

export default function CardPokemon({ name, url, type }: IPokemon) {
  const dexIndex = +url.split("/")[url.split("/").length - 2];
  const artworkUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dexIndex}.png`;
  const dispatch = useAppDispatch();

  const toast = useToast();

  const handleDispatch = () => {
    if (type === "all") {
      dispatch(addPokemon({ name, url }));
      toast({
        title: "Pokemon added.",
        description:
          "Now you can go to the favorites list and view your pokemons.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      dispatch(removePokemon({ name, url }));
      toast({
        title: "Pokemon removed",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      w="15rem"
      h="16rem"
      m="3rem"
      position="relative"
      direction="column"
      border={`1px solid #FF0000`}
      bg={Colors.lightGray}
      cursor="pointer"
      transition="all 0.3s ease"
      _hover={{
        boxShadow: BoxShadow.pink,
        transform: "translateY(-6px)",
      }}
      onClick={() => handleDispatch()}
    >
      <CardIndex dexIndex={dexIndex} />
      <CardArtworkPokemon artworkUrl={artworkUrl} />
      <CardNamePokemon name={name.toUpperCase()} />
    </Flex>
  );
}
