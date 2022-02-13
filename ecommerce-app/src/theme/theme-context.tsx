import { createContext, useState } from 'react';

const ThemeContext = createContext({
  currentMode: '' as string,
  toggleMode: () => {},
});
type Prop = {
  children?: JSX.Element;
};
export function ThemeContextProvider(props: Prop) {
  const [mode, setMode] = useState<string>('');

  function toggleModeHandler() {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }

  const context = {
    currentMode: mode,
    toggleMode: toggleModeHandler,
  };

  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
