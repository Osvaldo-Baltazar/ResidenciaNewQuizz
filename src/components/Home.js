import React, { useState, useEffect } from "react";
import Navegation from "./Navegation";
import ResultService from "../services/ResultService";

const Home = () => {
  const Mensaje_Default = "Aun no se ha contestado el cuestionario.";
  const Mensaje_Bienvenida =
    "A continuación, encontrarás una serie de tests diseñados para evaluar si posees las aptitudes necesarias para la carrera universitaria. ¡Buena suerte!";
  const [testResultsIndustrial, setTestResultsIndustrial] =
    useState(Mensaje_Default);
  const [testResultsMecanica, setTestResultsMecanica] =
    useState(Mensaje_Default);
  const [testResultsBioquimica, setTestResultsBioquimica] =
    useState(Mensaje_Default);
  const [mensaje, setMensaje] = useState(" Selecciona un test para iniciar:");
  const obtenerResultadosIniciales = async () => {
    try {
      const response = await ResultService.ObtenerResultados();
      if (
        response &&
        response.data &&
        response !== "No se encontraron resultados"
      ) {
        setMensaje("Selecciona un test para iniciar.");
        setTestResultsIndustrial(response.data.resultadoTest1.content);
        setTestResultsMecanica(response.data.resultadoTest2.content);
        setTestResultsBioquimica(response.data.resultadoTest3.content);
      }
    } catch (error) {
      console.log("Error details:", error);
    }
  };

  useEffect(() => {
    obtenerResultadosIniciales();
  }, []);

  return (
    <div>
      <Navegation />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>¡Bienvenido/a!</h1>
            <p>{Mensaje_Bienvenida}</p>
          </div>
        </div>
        <div
          className="col"
          style={{
            padding: "20px",
            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
            marginBottom: "10px",
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: mensaje }} />
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Numero</th>
                <th scope="col">Nombre del test</th>
                <th scope="col">Resultado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">#1</th>
                <td>
                  <a className="nav-link " href="/Industrial">
                    Industrial
                  </a>
                </td>
                <td>{testResultsIndustrial}</td>
              </tr>
              <tr>
                <th scope="row">#2</th>
                <td>
                  <a className="nav-link" href="/Mecanica">
                    Mecanica
                  </a>
                </td>
                <td>{testResultsMecanica}</td>
              </tr>
              <tr>
                <th scope="row">#3</th>
                <td>
                  <a className="nav-link" href="/Bioquimica">
                    Bioquimica
                  </a>
                </td>
                <td>{testResultsBioquimica}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
