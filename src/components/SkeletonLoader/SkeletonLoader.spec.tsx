import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import SkeletonLoader from ".";

describe("Skeleton", () => {
  it("renders a Skeleton", () => {
    const w = "jest.fn()";
    const h = "jest.fn()";

    render(<SkeletonLoader w={w} h={h} />);

    const testId = screen.getByTestId("skeleton-test");

    expect(testId).toBeInTheDocument();
  });
});
