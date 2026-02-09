import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navbar } from "@/components/Navbar";

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

vi.mock("@/components/MobileNav", () => ({
  MobileNav: () => <div data-testid="mobile-nav" />,
}));

describe("Navbar", () => {
  it("renders all 5 navigation items", () => {
    render(<Navbar />);
    expect(screen.getByText("Startseite")).toBeInTheDocument();
    expect(screen.getByText("Preise")).toBeInTheDocument();
    expect(screen.getByText("Yoga")).toBeInTheDocument();
    expect(screen.getByText("Shiatsu")).toBeInTheDocument();
    expect(screen.getByText("Weitere Angebote")).toBeInTheDocument();
  });

  it("renders direct link for Startseite with correct href", () => {
    render(<Navbar />);
    expect(screen.getByText("Startseite").closest("a")).toHaveAttribute("href", "/");
  });

  it("renders direct link for Preise with correct href", () => {
    render(<Navbar />);
    expect(screen.getByText("Preise").closest("a")).toHaveAttribute("href", "/preise");
  });

  it("renders the site logo text", () => {
    render(<Navbar />);
    expect(screen.getByText("Ganzheitliche Körpertherapie")).toBeInTheDocument();
  });

  it("dropdown opens on hover and shows sub-items", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    await user.hover(screen.getByText("Yoga"));
    expect(await screen.findByText("Yoga Allgemein")).toBeInTheDocument();
  });

  it("dropdown stays open when trigger is clicked", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    await user.hover(screen.getByText("Yoga"));
    await screen.findByText("Yoga Allgemein");
    await user.click(screen.getByText("Yoga"));
    expect(screen.getByText("Yoga Allgemein")).toBeInTheDocument();
  });

  it("dropdown sub-items have correct links", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    await user.hover(screen.getByText("Yoga"));
    const link = await screen.findByText("Yoga Allgemein");
    expect(link.closest("a")).toHaveAttribute("href", "/yoga/allgemein");
  });
});
