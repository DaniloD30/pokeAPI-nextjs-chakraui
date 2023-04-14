import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Header from ".";

describe("Header", () => {
  it("renders a Header", () => {
    render(<Header />);

    const textTitle = screen.getByText(/list/i);

    expect(textTitle).toBeInTheDocument();
  });
});
