import React from "react";
import { render, waitFor } from "react-native-testing-library";
import Login from "./Login";

describe("Login Page", () => {
  test("renders a login page upon load", async () => {
    const { getByText, getByTestId } = render(<Login />);

    const register = await waitFor(() => getByText("REGISTER"));
    const signIn = await waitFor(() => getByText("SIGN IN"));
    const logo = await waitFor(() => getByTestId("logo"));

    expect(register).toBeTruthy();
    expect(signIn).toBeTruthy();
    expect(logo).toBeTruthy();
  });
});
