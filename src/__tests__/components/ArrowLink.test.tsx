import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ArrowLink } from "@/components/ArrowLink";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe("ArrowLink", () => {
  it("renders the label", () => {
    render(<ArrowLink href="/yoga/allgemein" label="Zum Kursplan" />);
    expect(screen.getByText("Zum Kursplan")).toBeInTheDocument();
  });

  it("has the correct href", () => {
    render(<ArrowLink href="/yoga/allgemein" label="Zum Kursplan" />);
    expect(screen.getByText("Zum Kursplan").closest("a")).toHaveAttribute("href", "/yoga/allgemein");
  });

  it("renders an arrow icon", () => {
    const { container } = render(<ArrowLink href="/yoga/allgemein" label="Zum Kursplan" />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
