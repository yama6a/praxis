import { render, screen } from "@testing-library/react";
import { InfoBanner } from "@/app/_components/InfoBanner";

describe("InfoBanner", () => {
  it("renders the heading", () => {
    render(<InfoBanner />);
    expect(screen.getByRole("heading", { name: "Aktuelle Informationen" })).toBeInTheDocument();
  });

  it("renders the info content", () => {
    render(<InfoBanner />);
    expect(screen.getByText(/Neue Krankenkassen-Yogakurse/)).toBeInTheDocument();
  });
});
