import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '@/pages/components/Footer/Footer';

describe('Navbar Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test('Renders footer', () => {
    expect(screen.getByText("© 2024 Sam Chichester. All rights reserved.")).toBeInTheDocument();
  });
});