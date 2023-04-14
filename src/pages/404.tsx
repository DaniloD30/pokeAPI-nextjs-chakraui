import { FC } from "react";
import Image from "next/image";
import Head from "next/head";
import pokemonLogo from "../assets/sad-pokemon.png";
import { Text } from "@chakra-ui/react";

const NotFound: FC = () => {
  return (
    <>
      <Head>
        <Text>404 Not Found | Pokémon</Text>
      </Head>
      <div>
        <div
          style={{
            backgroundColor: "#c7a008",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {pokemonLogo ? (
            <Image src={pokemonLogo} alt="error" width={400} />
          ) : null}

          <Text as="i" fontSize="5xl" fontFamily="fantasy" color="#3B4CCA">
            404 Not Found | Pokémon
          </Text>
        </div>
      </div>
    </>
  );
};

export default NotFound;
