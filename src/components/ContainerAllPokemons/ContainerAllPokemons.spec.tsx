import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import ContainerFavorites from ".";
import { store } from "../../redux/store";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

import { Provider } from "react-redux";
import { usePokemons } from "@/hooks/querys/usePokemons";

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
describe("ContainerAllPokemons", () => {
  it("renders a Skeleton Loading true", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ContainerFavorites />
        </Provider>
      </QueryClientProvider>
    );
    const MockData = [
      {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
      },
    ];

    jest.mock("react-query", () => ({
      useQuery: jest
        .fn()
        .mockReturnValue({ data: { ...MockData }, isLoading: true, error: {} }),
    }));

    const textSkeleton = screen.getByTestId("skeleton-test");

    expect(textSkeleton).toBeInTheDocument();
  });

});
