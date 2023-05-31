import { useEffect } from 'react';

export function useKeyPress(key: string, callback: () => void) {
  return useEffect(() => {
    function handleKeyPress(e: KeyboardEvent) {
      if (e.code === key) {
        callback();
      }
    }

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);
}
