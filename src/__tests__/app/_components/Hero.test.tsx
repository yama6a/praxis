import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/app/_components/Hero";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

vi.mock("next/image", () => ({
  default: (props: any) => <img {...props} />,
}));

describe("Hero", () => {
  it("renders the main heading", () => {
    render(<Hero />);
    expect(screen.getByText("Herzlich Willkommen")).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    render(<Hero />);
    expect(screen.getByText("in Ihrer Praxis für Ganzheitliche Körpertherapie")).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(<Hero />);
    expect(screen.getByText("Termin vereinbaren")).toBeInTheDocument();
    expect(screen.getByText("Mehr erfahren")).toBeInTheDocument();
  });

  it("renders the hero image with alt text", () => {
    render(<Hero />);
    expect(screen.getByAltText("Buddha Statue vor Yin-Yang Hintergrund")).toBeInTheDocument();
  });
});
