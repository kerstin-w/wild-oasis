import { createContext, useContext, useEffect } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

const DarkModeContext = createContext();

/**
 * The `DarkModeProvider` component manages the dark mode state and provides a way to toggle between dark and light modes in a React application.
 * @returns The DarkModeProvider component is being returned. It wraps the children components with the  DarkModeContext.Provider, providing the values of isDarkMode and toggleDarkMode to its children.
 */
function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
    'isDarkMode'
  );

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add('dark-mode');
        document.documentElement.classList.remove('light-mode');
      } else {
        document.documentElement.classList.add('light-mode');
        document.documentElement.classList.remove('dark-mode');
      }
    },
    [isDarkMode]
  );

  /**
   * The function toggleDarkMode toggles the dark mode state using setIsDarkMode and provides the state and toggle function through a DarkModeContext Provider in a React component.
   */
  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

/**
 * The function `useDarkMode` returns the context value from `DarkModeContext` using React's `useContext` hook.
 * @returns The `useDarkMode` function is returning the `context` value obtained from the `DarkModeContext`. If the `context` is `undefined`, it throws an error indicating that`DarkModeContext` was used outside of `DarkModeProvider`.
 */
function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error('DarkModeContext was used outside of DarkModeProvider');
  return context;
}

export { DarkModeProvider, useDarkMode };
