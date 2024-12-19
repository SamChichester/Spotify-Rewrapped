import '@testing-library/jest-dom';
import { songs } from '@/data/songs';

describe('Songs Array', () => {
  test('Test songs length', () => {expect(songs).toHaveLength(100)});

  test('Test songs content', () => {
    songs.forEach((song, _) => {
      expect(song).toEqual(
        expect.objectContaining({
          albumCover: expect.any(String),
          artist: expect.any(String),
          title: expect.any(String)
        })
      );
    });
  });

  test('Test songs not empty', () => {
    songs.forEach((song, _) => {
      expect(song.albumCover.trim()).not.toBe('');
      expect(song.artist.trim()).not.toBe('');
      expect(song.title.trim()).not.toBe('');
    });
  });

  test('Test album cover URLs', () => {      
    songs.forEach((song) => {
      expect(song.albumCover).toMatch(/^https:\/\/i\.scdn\.co\/image\/ab67616d0000b273[a-f0-9]{24}$/);
    });
  });
});