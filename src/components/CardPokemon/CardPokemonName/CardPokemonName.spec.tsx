import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import CardArtworkPokemon from ".";
import { store } from "../../../redux/store";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

import { Provider } from "react-redux";


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

describe("CardPokemonName", () => {
  it("renders a CardPokemonName", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <CardArtworkPokemon name="" />
        </Provider>
      </QueryClientProvider>
    );

    const textSkeleton = screen.getByTestId("name-pokemon-testid");

    expect(textSkeleton).toBeInTheDocument();
  });
});
