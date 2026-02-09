import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/Footer";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe("Footer", () => {
  it("renders the practice name", () => {
    render(<Footer />);
    expect(screen.getByText("Praxis Ganzheitliche Körpertherapie")).toBeInTheDocument();
  });

  it("renders contact info", () => {
    render(<Footer />);
    expect(screen.getByText(/Knobelsdorffstr\. 34/)).toBeInTheDocument();
    expect(screen.getByText("030 / 95 60 80 20")).toBeInTheDocument();
  });

  it("renders legal links", () => {
    render(<Footer />);
    expect(screen.getByText("Kontakt & Anfahrt")).toBeInTheDocument();
    expect(screen.getByText("Impressum")).toBeInTheDocument();
    expect(screen.getByText("Haftungsausschluss")).toBeInTheDocument();
    expect(screen.getByText("Qualifikationen")).toBeInTheDocument();
  });

  it("renders copyright text", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${year}`))).toBeInTheDocument();
  });
});
