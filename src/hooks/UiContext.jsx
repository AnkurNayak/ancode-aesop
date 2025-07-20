import { useState, createContext, useContext, useEffect } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [state, setState] = useState({
    isSearchOpen: false,
    windowWidth: window.innerWidth,
  });

  /* Helper Fn */
  const updateState = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  const handleSearchOpen = () => updateState({ isSearchOpen: true });
  const handleSearchClose = () => updateState({ isSearchOpen: false });

  useEffect(() => {
    const handleResize = () => {
      updateState({ windowWidth: window.innerWidth });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <UIContext.Provider value={{ state, handleSearchOpen, handleSearchClose }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUi must be inside UI provider");
  }
  return context;
};
