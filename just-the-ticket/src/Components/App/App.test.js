import { it, expect } from "@jest/globals";
import { screen, render } from "@testing-library/react";
import App from "./App";

it('checks that "create ticket" is on the screen', ()=> {
  render(<App />);
  const heading = screen.getByText(/Create Ticket/i)
  expect(heading).toBeInTheDocument()
})
