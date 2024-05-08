import { createContext, useState } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [userData, setUserData] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  return (
    <DataContext.Provider
      value={{
        userData,
        setIsloading,
        isLoading,
        setUserData,
        error,
        setError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
export { DataContext };
export default DataProvider;
