import { Flex, Text } from "@chakra-ui/react";
import pokemonLogo from "@/assets/pokemon-logo.png";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokédex</title>
      </Head>
      <Flex
        flexDirection="column"
        justify="center"
        alignItems="center"
        height="100vh"
        backgroundColor="#ffcb05"
      >
        {pokemonLogo ? (
          <Image src={pokemonLogo} alt="home" width={500} />
        ) : null}
        <Link href="/list" passHref={true}>
          <Flex
            _hover={{
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
              transform: "translateY(-6px)",
            }}
          >
            <Text
              fontSize={{ base: "25px", md: "30px", lg: "40px", xl: "50px" }}
              as="b"
              color="#2a75bb"
              fontFamily="fantasy"
              _hover={{ color: "#022648" }}
            >
              View information about the various pokémon species!
            </Text>
          </Flex>
        </Link>
      </Flex>
    </>
  );
}
