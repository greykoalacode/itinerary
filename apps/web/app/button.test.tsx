import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "@repo/ui/button";

describe("Button", () => {
  it("renders children", () => {
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

    render(<Button appName="web">Open alert</Button>);

    const button = screen.getByRole("button", { name: /open alert/i });
    expect(button).toBeDefined();

    button.click();
    expect(alertSpy).toHaveBeenCalledWith("Hello from your web app!");

    alertSpy.mockRestore();
  });
});
