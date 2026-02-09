import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { YogaPreview } from "@/app/_components/YogaPreview";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

vi.mock("next/image", () => ({
  default: (props: any) => <img {...props} />,
}));

describe("YogaPreview", () => {
  it("renders the heading", () => {
    render(<YogaPreview />);
    expect(screen.getByRole("heading", { name: "Yoga Kurse" })).toBeInTheDocument();
  });

  it("renders 3 feature items", () => {
    render(<YogaPreview />);
    expect(screen.getByText("Hatha Yoga & Vinyasa Flow")).toBeInTheDocument();
    expect(screen.getByText("Kleine Gruppen für individuelle Betreuung")).toBeInTheDocument();
    expect(screen.getByText("Kurse am Morgen und Abend")).toBeInTheDocument();
  });

  it("renders the link to courses", () => {
    render(<YogaPreview />);
    expect(screen.getByText("Zum Kursplan").closest("a")).toHaveAttribute("href", "/yoga/allgemein");
  });

  it("renders the yoga image", () => {
    render(<YogaPreview />);
    expect(screen.getByAltText("Yoga Klasse in Charlottenburg")).toBeInTheDocument();
  });
});
