const Mensaje_Apto =
  "Tienes las habilidades y conocimientos necesarios para desempeñarte exitosamente en la carrera de";
const Mensaje_No_Apto =
  "Puede que tus habilidades y aptitudes no estén alineadas con los requisitos y desafíos de la carrera de";

const ProcesarResultadoIndustrial = (total) => {
  if (total >= 67) return `${Mensaje_Apto} industrial`;
  else return `${Mensaje_No_Apto} industrial`;
};

const ProcesarResultadoMecanica = (total) => {
  if (total >= 66) return `${Mensaje_Apto} mecanica`;
  else return `${Mensaje_No_Apto} mecanica`;
};

const ProcesarResultadoBioquimica = (total) => {
  if (total >= 65) return `${Mensaje_Apto} bioquimica`;
  else return `${Mensaje_No_Apto} bioquimica`;
};

export {
  ProcesarResultadoIndustrial,
  ProcesarResultadoMecanica,
  ProcesarResultadoBioquimica,
};
