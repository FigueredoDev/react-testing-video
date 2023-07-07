import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render App with hello message", () => {
    render(<App />);

    const text = screen.getByText("Hello world!");

    expect(text).toBeInTheDocument();
  });

  it("should change message on button click", () => {
    render(<App />);

    const initialText = screen.getByText("Let's learn more about testing in React");
    expect(initialText).toBeInTheDocument();

    const button = screen.getByText(/change message/i);
    fireEvent.click(button);

    const newText = screen.getByText(/new message!/i);
    expect(newText).toBeInTheDocument(); 

    const oldMessage = screen.queryByText("Let's learn more about testing in React");
    expect(oldMessage).not.toBeInTheDocument();
  });
});
