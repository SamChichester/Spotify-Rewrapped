import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import About from '@/pages/about';

describe('About Component', () => {
  beforeEach(() => {
    render(<About />);
  });

  test('Renders about title.', () => {
    const title = screen.getByText('About');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H1');
  });

  test('Renders description section', () => {
    const sectionTitle = screen.getByText('What is this project?');
    expect(sectionTitle).toBeInTheDocument();
    expect(sectionTitle.tagName).toBe('H2');

    const description = screen.getByText(/This project is my attempt to share/);
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(
      'This project is my attempt to share some of my favorite songs that I discovered in 2024.'
    );
  });

  test('Renders technologies section', () => {
    const sectionTitle = screen.getByText('What technologies did you use?');
    expect(sectionTitle).toBeInTheDocument();
    expect(sectionTitle.tagName).toBe('H2');

    const techStack = ['Next.js', 'HTML', 'Sass'];
    techStack.forEach(tech => {
      const techItem = screen.getByText(tech);
      expect(techItem).toBeInTheDocument();
      expect(techItem.tagName).toBe('LI');
    });
  });

  test('Maintains DOM hierarchy', () => {
    const container = screen.getByRole('heading', { name: 'About' }).closest('.about-container');
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('about-container');

    const content = container?.querySelector('.about-content');
    expect(content).toBeInTheDocument();

    const sections = container?.querySelectorAll('.section');
    expect(sections).toHaveLength(2);
  });
});
