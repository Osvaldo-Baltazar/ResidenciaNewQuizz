import React, { useState } from "react";
import authService from "../services/authService";
import { useHistory } from "react-router-dom";
import NavegationApp from "./NavegationApp";
import loginImage from "../Img/home-1-1117267987.jpg";
const Login = () => {
  const Mensaje_Error =
    "El correo electrónico o la contraseña ingresados son incorrectos. Por favor, inténtalo de nuevo.";
  const [correo, setCorreo] = useState("");
  const [contraseña, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const response = await authService.login(
        JSON.stringify({ correo, contraseña })
      );

      if (response.data) {
        setCorreo("");
        setPassword("");
        history.push("/home");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(Mensaje_Error);
      }
      console.log("Error details:", error.response);
    }
  };

  return (
    <div>
      <NavegationApp></NavegationApp>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-5 d-flex align-items-center">
            <div className="shadow  mb-5 bg-white rounded">
              <img
                src={loginImage}
                alt="Imagen de inicio de sesión"
                className="img-fluid h-100 rounded"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleLogin}>
                  <h3 className="card-title text-center mb-4">
                    Iniciar Sesión
                  </h3>
                  <div className="mb-3">
                    <input
                      required
                      type="email"
                      placeholder="Correo"
                      className="form-control"
                      id="correo"
                      aria-describedby="email"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      required
                      type="password"
                      className="form-control"
                      placeholder="Contraseña"
                      id="contraseña"
                      value={contraseña}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Entrar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
