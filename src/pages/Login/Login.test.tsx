import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Login } from "./Login";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe(Login.name, () => {
  const renderLoginForm = () =>
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

  it("should render the form", () => {
    renderLoginForm();

    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });

  it("should render an error message if a user doesnt input an email and submits", async () => {
    renderLoginForm();

    act(async () => {
      await userEvent.click(screen.getByTestId("login-button"));
    });

    waitFor(() => {}, { timeout: 1000 });

    expect(screen.getByText("Email is required")).toBeInTheDocument();
  });

  it("should render an error message if a user doesnt input a password and submits", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const emailInput = screen.getByPlaceholderText("Email");

    fireEvent.change(emailInput, { target: { value: "armeen" } });
    fireEvent.keyPress(emailInput, { key: "Enter" });

    expect(screen.getByText("Password is required")).toBeInTheDocument();
  });
});
