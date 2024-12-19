import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from '@/pages/components/Navbar/Navbar';

describe('Navbar Component', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  test('Renders navbar', () => {
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });
});