import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import About from '@/pages/about';

afterEach(() => {
  cleanup();
})

describe('About Component', () => {
  render(<About />);

  test('Renders heading.', () => {
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
