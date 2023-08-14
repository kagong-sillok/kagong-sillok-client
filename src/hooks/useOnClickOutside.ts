import { useEffect } from 'react';

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      event.stopPropagation();
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mouseup', listener);
    document.addEventListener('touchend', listener);
    return () => {
      document.removeEventListener('mouseup', listener);
      document.removeEventListener('touchend', listener);
    };
  }, [ref, handler]);
}
