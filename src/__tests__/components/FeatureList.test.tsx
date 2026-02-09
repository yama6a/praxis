import { render, screen } from "@testing-library/react";
import { FeatureList } from "@/components/FeatureList";
import { MdCheckCircle } from "react-icons/md";

describe("FeatureList", () => {
  const items = ["First item", "Second item", "Third item"];

  it("renders all items", () => {
    render(<FeatureList icon={MdCheckCircle} items={items} />);
    expect(screen.getByText("First item")).toBeInTheDocument();
    expect(screen.getByText("Second item")).toBeInTheDocument();
    expect(screen.getByText("Third item")).toBeInTheDocument();
  });

  it("renders as a list", () => {
    render(<FeatureList icon={MdCheckCircle} items={items} />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
    expect(list.querySelectorAll("li")).toHaveLength(3);
  });

  it("renders an icon for each item", () => {
    render(<FeatureList icon={MdCheckCircle} items={items} />);
    const list = screen.getByRole("list");
    expect(list.querySelectorAll("svg")).toHaveLength(3);
  });
});
