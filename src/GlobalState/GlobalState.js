import { useState } from "react";

// Inicializar el estado global
let globalState = {
  testResults: {
    industrial: "",
    mecanica: "",
    bioquimica: "",
  },
};

// Función para actualizar el estado global
export const updateGlobalState = (newState) => {
  globalState = { ...globalState, ...newState };
};

// Función para obtener el estado global
export const useGlobalState = () => {
  const [state, setState] = useState(globalState);
  console.log(state);
  const setStateAndUpdateGlobal = (newState) => {
    setState(newState);
    updateGlobalState(newState);
  };
  console.log(state);
  return [state, setStateAndUpdateGlobal];
};
