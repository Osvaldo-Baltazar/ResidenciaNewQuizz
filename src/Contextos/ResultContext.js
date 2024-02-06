// ResultsContext.js
import React, { createContext, useContext, useState } from "react";

const ResultsContext = createContext({});

export const UseResults = () => useContext(ResultsContext);

export const ResultsProvider = ({ children }) => {
  const [testResults, setTestResults] = useState({
    industrial: "",
    mecanica: "",
    bioquimica: "",
  });

  const updateTestResults = (updatedResults) => {
    setTestResults((prevResults) => ({
      ...prevResults,
      ...updatedResults,
    }));
  };
  return (
    <ResultsContext.Provider value={{ testResults, updateTestResults }}>
      {children}
    </ResultsContext.Provider>
  );
};
