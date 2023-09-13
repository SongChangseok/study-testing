import { render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  /**
   * * toHaveStyle 관련 문제 참고
   * https://github.com/testing-library/jest-dom#tohavestyle
   * https://stackoverflow.com/questions/72310701/testing-with-tohavestyle-passes-when-expecting-fail
   */
  expect(colorButton).toHaveStyle("background-color: red");
});

test("button turns blue when clicked", () => {});
