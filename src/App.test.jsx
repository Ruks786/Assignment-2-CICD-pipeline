import { render, screen } from "@testing-library/react";
import App from "./App";

test("name is shown", () => {
  render(<App />);
  expect(screen.getByText("Rukaiya Pardawala")).toBeInTheDocument();
});