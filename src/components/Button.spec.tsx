import Button from "./Button";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Button component", () => {
  it("should render with red background if disabled", () => {
    render(
      <Button onClick={() => {}} disabled>
        Click me
      </Button>
    );

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toHaveStyle({ backgroundColor: "red" });
  });

  it("should call onClick prop on click", () => {
    const onClick = jest.fn();
    render(
      <Button onClick={onClick} disabled>
        click me
      </Button>
    );

    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
