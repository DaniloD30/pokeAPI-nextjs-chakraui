import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import CardIndex from ".";
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

describe("CardIndex", () => {
  it("renders a CardIndex", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <CardIndex dexIndex={0} />
        </Provider>
      </QueryClientProvider>
    );

    const textSkeleton = screen.getByTestId("index-test-id");

    expect(textSkeleton).toBeInTheDocument();
  });
});
