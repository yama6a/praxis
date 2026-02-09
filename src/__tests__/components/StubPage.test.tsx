import { render, screen } from "@testing-library/react";
import { StubPage } from "@/components/StubPage";

describe("StubPage", () => {
  it("renders the title", () => {
    render(<StubPage title="Yoga Allgemein" />);
    expect(screen.getByRole("heading", { name: "Yoga Allgemein" })).toBeInTheDocument();
  });

  it("renders the placeholder text", () => {
    render(<StubPage title="Yoga Allgemein" />);
    expect(screen.getByText(/Diese Seite befindet sich noch im Aufbau/)).toBeInTheDocument();
  });
});
