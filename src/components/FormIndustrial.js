import React, { useState } from "react";
import Navegation from "./Navegation";
import { useHistory } from "react-router-dom";
import { QuestionIndustrial } from "../utils/Question";
import ResultService from "../services/ResultService";
import authService from "../services/authService";
import { ProcesarResultadoIndustrial } from "../utils/Results";

const FormIndustrial = () => {
  const Mensaje_Default = "Aun no se ha contestado el cuestionario.";
  const history = useHistory();
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (questionIndex, answerIndex) => {
    setAnswers({
      ...answers,
      [questionIndex]: answerIndex,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let sum = 0;
    Object.keys(answers).forEach((questionIndex) => {
      const answerIndex = answers[questionIndex];
      const answerScore =
        QuestionIndustrial[questionIndex].answerOptions[answerIndex]
          .answerScore;
      sum += answerScore;
    });
    const ResultIndustrial = ProcesarResultadoIndustrial(sum);
    try {
      const response = await ResultService.ObtenerResultados();
      if (
        response &&
        response.data &&
        response.data.resultadoTest2 &&
        response.data.resultadoTest3
      ) {
        const testResult = {
          idUsuario: authService.getIdUser(),
          resultadoTestMatematico: "N/A",
          resultadoTestEspanol: "N/A",
          resultadoTest1: {
            content: ResultIndustrial,
          },
          resultadoTest2: {
            content: response.data.resultadoTest2.content,
          },
          resultadoTest3: {
            content: response.data.resultadoTest3.content,
          },
        };
        await ResultService.GuardarResultado(JSON.stringify(testResult));
      } else {
        const testResult = {
          idUsuario: authService.getIdUser(),
          resultadoTestMatematico: "N/A",
          resultadoTestEspanol: "N/A",
          resultadoTest1: {
            content: ResultIndustrial,
          },
          resultadoTest2: {
            content: Mensaje_Default,
          },
          resultadoTest3: {
            content: Mensaje_Default,
          },
        };
        await ResultService.GuardarResultado(JSON.stringify(testResult));
      }

      history.push(`/home`);
    } catch (error) {
      console.error("Error details:", error);
    }
  };

  return (
    <div>
      <Navegation />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Cuestionario de industrial </h1>
            <p>Prefiero una actividad en la cual tenga que:</p>
          </div>
        </div>
        <div className="col">
          <form
            onSubmit={handleSubmit}
            style={{
              padding: "20px",
              boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
              marginBottom: "10px",
            }}
          >
            {QuestionIndustrial.map((Questions, questionIndex) => (
              <div key={questionIndex} style={{ marginBottom: "10px" }}>
                <p>
                  {questionIndex + 1}.{Questions.questionText}
                </p>
                {Questions.answerOptions.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <input
                      required
                      type="radio"
                      id={`question_${questionIndex}_option_${optionIndex}`}
                      name={`question_${questionIndex}`}
                      value={option.answerScore}
                      checked={answers[questionIndex] === optionIndex}
                      onChange={() =>
                        handleAnswerChange(questionIndex, optionIndex)
                      }
                    />
                    <label
                      htmlFor={`question_${questionIndex}_option_${optionIndex}`}
                    >
                      {option.answerText}
                    </label>
                  </div>
                ))}
              </div>
            ))}
            <button className="btn btn-primary mb-2" type="submit">
              Enviar respuestas
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormIndustrial;
