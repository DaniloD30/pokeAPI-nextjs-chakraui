import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import ContainerFavorites from ".";
import { store } from "../../redux/store";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

import { Provider } from "react-redux";
import reducer, { addPokemon, State } from "@/redux/slices/pokemons";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));
describe("ContainerFavorites", () => {
  it("renders a ContainerFavorites", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ContainerFavorites />
        </Provider>
      </QueryClientProvider>
    );

    const textTitle = screen.getByText(
      /Click on a pokémon in the all tab and favorite it\!/i
    );

    expect(textTitle).toBeInTheDocument();
  });
});
