import Tasks from "./Tasks";
import { fireEvent, render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

// cSpell: disable

describe("Tasks", () => {
  const worker = setupServer(
    rest.get("https://jsonplaceholder.typicode.com/todos", async (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: 1,
            userId: 1,
            title: "delectus aut autem",
            completed: false,
          },
        ])
      );
    })
  );

  beforeAll(() => {
    worker.listen();
  });

  beforeEach(() => {
    worker.resetHandlers();
  });

  it("should fetch and show tasks on button click", async () => {
    render(<Tasks />);

    const button = screen.getByText(/Get tasks from API/i);
    fireEvent.click(button);

    await screen.findByText(/task: 1 - delectus aut autem/i);
  });

  it("should show error message on fetch error", async () => {
    worker.use(
      rest.get("https://jsonplaceholder.typicode.com/todos", async (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: "unexpected error" }));
      })
    );

    render(<Tasks />);

    const button = screen.getByText(/Get tasks from API/i);
    fireEvent.click(button);

    await screen.findByText(/request failed with status code 500/i);
  });
});
