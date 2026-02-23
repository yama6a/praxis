import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { InfoBanner } from "@/app/_components/InfoBanner";

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

vi.mock("next/image", () => ({
  default: (props: any) => <img {...props} />,
}));

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe("InfoBanner", () => {
  it("renders the heading", () => {
    render(<InfoBanner />);
    expect(screen.getByRole("heading", { name: "Aktuelle Informationen" })).toBeInTheDocument();
  });

  it("renders the retreat content", () => {
    render(<InfoBanner />);
    expect(screen.getByText(/Wochenend-Retreat/)).toBeInTheDocument();
    expect(screen.getByText(/Kloster Lehnin/)).toBeInTheDocument();
  });
});
