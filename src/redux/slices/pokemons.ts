import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IPokemon } from "@/types";

export interface State {
  favoritesPokemons: IPokemon[];
}
const initialState: State = {
  favoritesPokemons: [],
};

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    addPokemon: (state, action: PayloadAction<IPokemon>) => {
      if (
        !state.favoritesPokemons.find(
          (element) => element.name === action.payload.name
        )
      ) {
        state.favoritesPokemons = [...state.favoritesPokemons, action.payload];
        localStorage.setItem(
          "pokemons",
          JSON.stringify(state.favoritesPokemons)
        );
      }
    },
    addPokemonList: (state, action: PayloadAction<IPokemon[]>) => {
      state.favoritesPokemons = action.payload;
    },
    removePokemon: (state, action: PayloadAction<IPokemon>) => {
      state.favoritesPokemons = [
        ...state.favoritesPokemons.filter(
          (current) => current.name !== action.payload.name
        ),
      ];
      localStorage.setItem("pokemons", JSON.stringify(state.favoritesPokemons));
    },
  },
});

export const { addPokemon, removePokemon, addPokemonList } =
  pokemonSlice.actions;

export const favoritesPokemons = (state: RootState) =>
  state.pokemons.favoritesPokemons;

export default pokemonSlice.reducer;
