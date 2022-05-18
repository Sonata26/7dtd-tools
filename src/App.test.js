import { render } from "@testing-library/react";
import App from "./App";

test("app doesnt crash", () => {
  render(<App />);
});
