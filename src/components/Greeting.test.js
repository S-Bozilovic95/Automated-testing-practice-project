import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

// creating testing suite
describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    //   arrange
    render(<Greeting />);

    //   Act
    // ...nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if button was NOT clicked", () => {
    render(<Greeting />);
    const paragraphElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
  });

  test(`render "changed" if button WAS clicked`, () => {
    render(<Greeting />);

    // Act
    // moze da odradi event i sa getByText koje stoji u btn,
    // a moze i da se dohvati prema roli
    const btnElement = screen.getByRole("button");
    userEvent.click(btnElement);

    const paragraphElement = screen.getByText("Changed!");
    expect(paragraphElement).toBeInTheDocument();
  });

  test(`does not render "good to see you" if button WAS clicked`, () => {
    render(<Greeting />);

    const btnElement = screen.getByRole("button");
    userEvent.click(btnElement);

    // query vraca null ako ne nadje text na stranici
    const paragraphElement = screen.queryByText("good to see you", {
      exact: false,
    });
    // ovde ocekujem da ne nadje text, dakle ocekujem null
    expect(paragraphElement).toBeNull();
  });
});
