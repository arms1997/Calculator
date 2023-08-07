import { render, screen } from "@testing-library/react";
import { Calculator } from "./Calculator";
import userEvent from "@testing-library/user-event";

describe(Calculator.name, () => {
  it("should render", () => {
    const { getByText } = render(<Calculator />);

    expect(getByText("C")).toBeInTheDocument();
    expect(getByText("=")).toBeInTheDocument();
  });

  it("should render the correct number of buttons", () => {
    const { getAllByRole } = render(<Calculator />);

    expect(getAllByRole("button")).toHaveLength(27);
  });

  it("should be able to do addition", async () => {
    render(<Calculator />);

    await userEvent.click(screen.getByText("7"));
    await userEvent.click(screen.getByText("+"));
    await userEvent.click(screen.getByText("3"));
    await userEvent.click(screen.getByText("="));

    expect(screen.getByTestId("screen")).toHaveTextContent("10");
  });

  it("should be able to do subtraction", async () => {
    render(<Calculator />);

    await userEvent.click(screen.getByText("7"));
    await userEvent.click(screen.getByText("-"));
    await userEvent.click(screen.getByText("3"));
    await userEvent.click(screen.getByText("="));

    expect(screen.getByTestId("screen")).toHaveTextContent("4");
  });

  it("should be able to do multiplication", async () => {
    render(<Calculator />);

    await userEvent.click(screen.getByText("7"));
    await userEvent.click(screen.getByText("*"));
    await userEvent.click(screen.getByText("3"));
    await userEvent.click(screen.getByText("="));

    expect(screen.getByTestId("screen")).toHaveTextContent("21");
  });

  it("should be able to do division", async () => {
    render(<Calculator />);

    await userEvent.click(screen.getByText("5"));
    await userEvent.click(screen.getByText("/"));
    await userEvent.click(screen.getByText("2"));
    await userEvent.click(screen.getByText("="));

    expect(screen.getByTestId("screen")).toHaveTextContent("2.5");
  });

  it("should be able to do percentages", async () => {
    render(<Calculator />);

    await userEvent.click(screen.getByText("5"));
    await userEvent.click(screen.getByText("%"));

    expect(screen.getByTestId("screen")).toHaveTextContent("0.05");
  });

  it("should be able to do square roots", async () => {
    render(<Calculator />);

    await userEvent.click(screen.getByText("5"));
    await userEvent.click(screen.getByText("(√)"));

    expect(screen.getByTestId("screen")).toHaveTextContent("2.23606797749979");
  });

  it("should be able to do the square of a number", async () => {
    render(<Calculator />);

    await userEvent.click(screen.getByText("9"));
    await userEvent.click(screen.getByText("x²"));
    await userEvent.click(screen.getByText("="));

    expect(screen.getByTestId("screen")).toHaveTextContent("81");
  });

  it("should be able to do the cube of a number", async () => {
    render(<Calculator />);

    await userEvent.click(screen.getByText("9"));
    await userEvent.click(screen.getByText("xⁿ"));
    await userEvent.click(screen.getByText("3"));
    await userEvent.click(screen.getByText("="));

    expect(screen.getByTestId("screen")).toHaveTextContent("729");
  });

  it("should clear the screen when the C button is clicked", async () => {
    render(<Calculator />);

    await userEvent.click(screen.getByText("9"));
    await userEvent.click(screen.getByText("C"));

    expect(screen.getByTestId("screen")).toHaveTextContent("0");
  });

  it("should be able to handle decimal numbers", async () => {
    render(<Calculator />);

    await userEvent.click(screen.getByText("9"));
    await userEvent.click(screen.getByText("."));
    await userEvent.click(screen.getByText("3"));
    await userEvent.click(screen.getByText("="));

    expect(screen.getByTestId("screen")).toHaveTextContent("9.3");
  });

  it("should be able to handle negative numbers", async () => {
    render(<Calculator />);

    await userEvent.click(screen.getByText("9"));
    await userEvent.click(screen.getByText("+-"));

    expect(screen.getByTestId("screen")).toHaveTextContent("-9");
  });
});
