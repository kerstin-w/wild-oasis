import { useEffect, useRef } from 'react';

/**
 * The `useOutsideClick` function allows you to detect clicks outside a specified element and trigger a handler function accordingly.
 * @param handler - The `handler` parameter in the `useOutsideClick` function is a function that will be called when a click event occurs outside of the element referenced by the `ref`.
 * @param [listenCapturing=true] - The `listenCapturing` parameter in the `useOutsideClick` function determines whether the event listener should be registered in the capturing phase (`true`) or the bubbling phase (`false`). When `listenCapturing` is set to `true`, the event will be captured during
 * the capturing phase,
 * @returns The `useOutsideClick` custom hook returns a `ref` object that is used to reference an element in the DOM. This `ref` object is created using the `useRef` hook from React.
 */
export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      const handleEscape = (e) => {
        if (!ref.current) return;
        if (e.key === 'Escape') handler();
      };

      document.addEventListener('click', handleClick, listenCapturing);
      window.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('click', handleClick, listenCapturing);
        window.removeEventListener('keydown', handleEscape);
      };
    },
    [handler, listenCapturing]
  );
  return ref;
}
