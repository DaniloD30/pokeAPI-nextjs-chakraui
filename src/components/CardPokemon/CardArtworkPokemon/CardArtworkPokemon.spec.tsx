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

describe("CardArtworkPokemon", () => {
  it("renders a CardArtworkPokemon", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <CardArtworkPokemon artworkUrl="" />
        </Provider>
      </QueryClientProvider>
    );
    
    const textSkeleton = screen.getByTestId("artwork-pokemon-testid");

    expect(textSkeleton).toBeInTheDocument();
  });
});
