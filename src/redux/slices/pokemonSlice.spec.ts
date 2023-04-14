import reducer, { State, addPokemon, removePokemon } from "./pokemons";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    favoritesPokemons: [],
  });
});

test("should handle a todo being added to an empty list", () => {
  const previousState: State = {
    favoritesPokemons: [],
  };

  expect(reducer(previousState, addPokemon({ name: "", url: "" }))).toEqual({
    favoritesPokemons: [{name: "", url: ""}],
  });
});

test("should handle a todo being remove to an empty list", () => {
    const previousState: State = {
      favoritesPokemons: [{ name: "", url: "" }],
    };
  
    expect(reducer(previousState, removePokemon({ name: "", url: "" }))).toEqual({
      favoritesPokemons: [],
    });
  });

