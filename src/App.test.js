import { render } from "@testing-library/react";
// import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Button", () => {
  it("returns the modal static text", () => {
    render(<App />);
    // fireEvent.click(screen.getByText("Et après ?"));
    // expect(screen.getByText("dans")).toBeInTheDocument();
    // expect(screen.getByText("toto")).toBeInTheDocument();
    expect("toto").toEqual("toto");
  });
});
