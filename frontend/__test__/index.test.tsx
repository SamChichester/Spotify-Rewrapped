import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/pages';
import { songs } from '@/data/songs';

const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

describe('Home Component', () => {
  beforeEach(() => {
    render(<Home />);
  });

  test('Renders title and description', () => {
    const title = screen.getByText(/Top/);
    expect(title).toBeInTheDocument();

    const description = screen.getByText(/Here are my 100 favorite songs/);
    expect(description).toBeInTheDocument();
  });

  test('Renders all songs from songs array', () => {
    const songImages = screen.getAllByAltText('Album Cover');
    expect(songImages).toHaveLength(100);

    songs.forEach((song) => {
      const songTitle = screen.getByText(song.title);
      expect(songTitle).toBeInTheDocument();
    });
  });

  test('Renders correct ranking numbers', () => {
    const rankings = screen.getAllByRole('heading', { level: 1});
    songs.forEach((_, index) => {
      expect(rankings[index + 1]).toHaveTextContent((100 - index).toString());
    });
  });

  test('Alternates container classes for left/right', () => {
    const songContainers = document.querySelectorAll('.animate-on-scroll');
    songs.forEach((_, index) => {
      expect(songContainers[index]).toHaveClass(
        index % 2 === 0 ? 'song-container-left' : 'song-container-right'
      );
    });
  });

  test('Sets up and cleans up IntersectionObserver', () => {
    const { unmount } = render(<Home />);

    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      })
    );

    unmount();
    
    expect(mockIntersectionObserver).toHaveBeenCalled();
  });

  test('Test images', () => {
    const images = screen.getAllByAltText('Album Cover');
    images.forEach(img => {
      expect(img).toHaveAttribute('loading', 'lazy');
      expect(img).toHaveAttribute('src', expect.any(String));
      expect(img).toHaveClass('song-image');
    });
  });

  test('Images have correct album covers', () => {
    const images = screen.getAllByAltText('Album Cover');
    images.forEach((img, index) => {
      expect(img).toHaveAttribute('src', songs[index].albumCover);
    });
  });
});
