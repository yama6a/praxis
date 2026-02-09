import { render, screen } from "@testing-library/react";
import { SectionHeading } from "@/components/SectionHeading";
import { MdSpa } from "react-icons/md";

describe("SectionHeading", () => {
  it("renders the title", () => {
    render(<SectionHeading icon={MdSpa} title="Test Heading" />);
    expect(screen.getByRole("heading", { name: "Test Heading" })).toBeInTheDocument();
  });

  it("renders the icon in a circle", () => {
    const { container } = render(<SectionHeading icon={MdSpa} title="Test" />);
    const circle = container.querySelector(".rounded-full");
    expect(circle).toBeInTheDocument();
    expect(circle?.querySelector("svg")).toBeInTheDocument();
  });
});
