import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Pagination from ".";

describe("Pagination", () => {
  it("renders a Pagination", () => {
    const count = 1;
    const total = 10;
    const handleChangePage = jest.fn();
    render(
      <Pagination
        handleChangePage={handleChangePage}
        count={count}
        total={total}
      />
    );

    const textTitle = screen.getByText(/next/i);

    expect(textTitle).toBeInTheDocument();
  });
  it("renders button next", () => {
    const count = 1;
    const total = 10;
    const handleChangePage = jest.fn();
    render(
      <Pagination
        handleChangePage={handleChangePage}
        count={count}
        total={total}
      />
    );

    const textTitle = screen.getByRole("button", {
      name: /next/i,
    });

    expect(textTitle).toBeInTheDocument();
  });
  it("renders button previous", () => {
    const count = 1;
    const total = 10;
    const handleChangePage = jest.fn();
    render(
      <Pagination
        handleChangePage={handleChangePage}
        count={count}
        total={total}
      />
    );

    const textTitle = screen.getByRole("button", {
      name: /previous/i,
    });

    expect(textTitle).toBeInTheDocument();
  });
});
