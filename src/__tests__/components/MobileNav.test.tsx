import { vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MobileNav } from "@/components/MobileNav";

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

vi.mock("next/link", () => ({
  default: ({ children, href, onClick, ...props }: any) => (
    <a href={href} onClick={onClick} {...props}>{children}</a>
  ),
}));

describe("MobileNav", () => {
  it("renders the hamburger button", () => {
    render(<MobileNav />);
    expect(screen.getByRole("button", { name: /menü öffnen/i })).toBeInTheDocument();
  });

  it("opens the sheet when hamburger is clicked", async () => {
    const user = userEvent.setup();
    render(<MobileNav />);
    await user.click(screen.getByRole("button", { name: /menü öffnen/i }));
    expect(await screen.findByText("Menü")).toBeInTheDocument();
    expect(await screen.findByText("Startseite")).toBeInTheDocument();
  });

  it("shows collapsible sub-items when section is expanded", async () => {
    const user = userEvent.setup();
    render(<MobileNav />);
    await user.click(screen.getByRole("button", { name: /menü öffnen/i }));
    await screen.findByText("Menü");
    await user.click(screen.getByText("Yoga"));
    expect(await screen.findByText("Yoga Allgemein")).toBeInTheDocument();
    expect(await screen.findByText("Yoga auf dem Stuhl")).toBeInTheDocument();
  });

  it("closes the sheet when a link is clicked", async () => {
    const user = userEvent.setup();
    render(<MobileNav />);
    await user.click(screen.getByRole("button", { name: /menü öffnen/i }));
    await screen.findByText("Menü");
    await user.click(screen.getByText("Startseite"));
    await waitFor(() => {
      expect(screen.queryByText("Menü")).not.toBeInTheDocument();
    });
  });
});
