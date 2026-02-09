import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ShiatsuPreview } from "@/app/_components/ShiatsuPreview";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

vi.mock("next/image", () => ({
  default: (props: any) => <img {...props} />,
}));

describe("ShiatsuPreview", () => {
  it("renders the heading", () => {
    render(<ShiatsuPreview />);
    expect(screen.getByRole("heading", { name: "Shiatsu Therapie" })).toBeInTheDocument();
  });

  it("renders 3 feature items", () => {
    render(<ShiatsuPreview />);
    expect(screen.getByText("Stressreduktion und Burnout-Prävention")).toBeInTheDocument();
    expect(screen.getByText("Linderung von Verspannungen")).toBeInTheDocument();
    expect(screen.getByText("Stärkung des Immunsystems")).toBeInTheDocument();
  });

  it("renders the link to booking", () => {
    render(<ShiatsuPreview />);
    expect(screen.getByText("Behandlung buchen").closest("a")).toHaveAttribute("href", "/shiatsu/allgemein");
  });

  it("renders the shiatsu image", () => {
    render(<ShiatsuPreview />);
    expect(screen.getByAltText("Shiatsu Behandlungsszene")).toBeInTheDocument();
  });
});
