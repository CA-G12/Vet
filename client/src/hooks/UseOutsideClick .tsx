import { useEffect, useRef } from 'react';

const useOutsideClick = (callback: Function) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: any) => {
      // console.log(ref.current?.children, event.target);
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [callback]);

  return ref;
};

export default useOutsideClick;
