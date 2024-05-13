import React, { createContext, useContext, useState } from 'react';

interface AppContextValue {
  selectedOption: string;
  loading: boolean;

  updateSideBarNav: (item: string) => void;

}

// Create the context
const AppContext = createContext<AppContextValue>({} as AppContextValue);


// Create the custom hook to access context value
export const useAppContext = () => useContext(AppContext);

// Define the AppProvider component
export const AppProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

  const [selectedOption, setSelectedOption] = useState('Dashboard');
  const [loading, setLoading] = useState(false);

  const updateSideBarNav = (item :string) => {
    setSelectedOption(item);
    setLoading(true);
    setTimeout(() => {
      // After saving is complete, set loading state to false
      setLoading(false);
    }, 2000); // Simulating 2 seconds delay
  };



  return (
    <AppContext.Provider
      value={{
        selectedOption,
        loading,
        updateSideBarNav,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
