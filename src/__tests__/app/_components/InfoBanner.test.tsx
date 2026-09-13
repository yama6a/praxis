import type { ComponentProps } from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InfoBanner } from '@/app/_components/InfoBanner';

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

vi.mock('next/image', () => ({
  default: (props: ComponentProps<'img'>) => <img {...props} />,
}));

vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: ComponentProps<'a'>) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe('InfoBanner', () => {
  it('renders the heading', () => {
    render(<InfoBanner />);
    expect(screen.getByRole('heading', { name: 'Aktuelle Informationen' })).toBeInTheDocument();
  });

  it('renders the course content', () => {
    render(<InfoBanner />);
    expect(
      screen.getByText(/Neue Krankenkassen-Pr.ventionskurse ab Sept. 2026/),
    ).toBeInTheDocument();
    expect(screen.getByText(/Kursdauer: 10 Unterrichtstermine/)).toBeInTheDocument();
  });
});
