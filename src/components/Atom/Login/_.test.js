import { render } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";
import Login from "./index.svelte"; 

describe("Login", () => {
  it("it should rendered", () => {
    const login = render(Login);

    expect(login).toBeTruthy();
  });
});