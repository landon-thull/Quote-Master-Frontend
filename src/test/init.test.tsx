import {describe, it, expect} from "vitest";
import {render, screen} from "@testing-library/react";

describe("Init test", () => {
  it("does nothing", () => {
    console.log("Hello World!");
  });
});

describe("React testing library", () => {
  it("Should render components", () => {
    render(<h1>Testing</h1>);
    expect(screen.getByRole("heading").textContent).toEqual("Testing");
  });
});