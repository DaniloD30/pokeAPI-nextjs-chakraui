import Image from "next/image";
import pokemonLogo from "@/assets/pokemon-logo.png";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <Flex
      h={20}
      backgroundColor="#2a75bb"
      justify="space-between"
      align="center"
    >
      <Text fontSize="4xl" color="#FFFF" fontFamily="fantasy" marginLeft={2}>
        List
      </Text>
      {pokemonLogo ? <Image src={pokemonLogo} alt="error" width={300} /> : null}
      <Link href="/" passHref={true}>
        <Flex
          _hover={{
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
            transform: "translateY(-6px)",
          }}
        >
          <Text
            fontSize="4xl"
            marginRight={2}
            as="b"
            color="#FFFF"
            fontFamily="fantasy"
            _hover={{ color: "#022648" }}
          >
            Back
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
}
