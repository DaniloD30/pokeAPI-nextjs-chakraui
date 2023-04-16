import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import TabsContent from ".";
import { store } from "../../redux/store";
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

describe("TabsContent", () => {
  it("renders a TabsContent", () => {
    const mock = [{ element: <div />, tabTitle: "title" }];
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <TabsContent componentProps={mock} />
        </Provider>
      </QueryClientProvider>
    );

    const textTitle = screen.getByTestId("tabs-testid");

    expect(textTitle).toBeInTheDocument();
  });
});
