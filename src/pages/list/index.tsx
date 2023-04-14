import Header from "@/components/Header";
import ContainerFavorites from "@/components/ContainerFavorites";
import ContainerAllPokemons from "@/components/ContainerAllPokemons";
import TabsContent from "@/components/TabsContent";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux/store/hook";
import { addPokemonList } from "@/redux/slices/pokemons";

export default function List() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let pokemonsStorage = JSON.parse(localStorage.getItem("pokemons") || "[]");
    dispatch(addPokemonList(pokemonsStorage));
  }, []);

  const arrComponents = [
    {
      tabTitle: "Favorites",
      element: <ContainerFavorites />,
    },
    {
      tabTitle: "All",
      element: <ContainerAllPokemons />,
    },
  ];

  return (
    <>
      <Header />
      <TabsContent children={arrComponents} />
    </>
  );
}
