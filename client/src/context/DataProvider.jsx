import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [account, setAccount] = useState(localStorage.getItem('account') || '');
  const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail') || '');

  return (
    <DataContext.Provider value={{ account, setAccount, userEmail, setUserEmail }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
