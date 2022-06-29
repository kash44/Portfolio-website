import { useEffect } from 'react';

const useClickOutside = (stateHandler: () => void, ref: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    let handler = (event: MouseEvent) => {
        console.log(`Clicked outside of sidebar: ${ref.current && !ref.current.contains(event.target as Node)}`)

      if (ref.current && !ref.current.contains(event.target as Node)) {
        stateHandler();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [ref, stateHandler]);
};

export default useClickOutside