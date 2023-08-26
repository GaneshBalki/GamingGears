import React, { createContext, useState, useContext } from 'react';

const AdressContext = createContext();

export function useAddress() {
  return useContext(AdressContext);
}

export function AddressProvider({ children }) {
  const [address, setAddress] = useState(""); // Initialize disid as needed
 
  return (
    <AdressContext.Provider value={{ address, setAddress }}>
      {children}
    </AdressContext.Provider>
  );
}
