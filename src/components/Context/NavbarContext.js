import { createContext, useContext, useState } from "react";

const NavbarContext = createContext("");

export function DropdownProvider({ children }) {
  const [dropdownItem, setDropdownItem] = useState([]);
  const addDropdownItem = (item) => {
    setDropdownItem((prevItems) => [...prevItems, item]);
  };
  return (
    <NavbarContext.Provider value={{ dropdownItem, addDropdownItem }}>
      {children}
    </NavbarContext.Provider>
  );
}

export const useDropdownContext = () => {
  return useContext(NavbarContext);
};
