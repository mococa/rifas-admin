// External
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

// Interfaces
interface Context {
  toggle(): void;
  isDark: boolean;
}

export const DarkModeContext = createContext({} as Context);

export const DarkModeProvider: React.FC = ({ children }) => {
  // States
  const [dark, setDark] = useState<boolean>(true);

  const handleToggleClass = (adding: boolean, classList?: DOMTokenList) => {
    if (!classList) return;
    if (adding && !classList.contains('dark')) classList.add('dark');
    else classList.remove('dark');
  };

  // Effects
  useEffect(() => {
    const localStorageDark = Boolean(localStorage.getItem('dark') === 'true');
    setDark(localStorageDark);
  }, []);

  useEffect(() => {
    localStorage.setItem('dark', String(dark));
    handleToggleClass(dark, document.body.parentElement?.classList);
  }, [dark]);

  // Memos
  const value = useMemo(
    () => ({
      toggle() {
        setDark((d) => !d);
      },
      isDark: dark,
    }),
    [dark]
  );

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Hooks
export const useDarkMode = () => {
  const ctx = useContext(DarkModeContext);
  if (!ctx) throw new Error('');
  return ctx;
};
