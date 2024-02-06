import React, { useState } from "react";
import authService from "../services/authService";
import { useHistory } from "react-router-dom";
import NavegationApp from "./NavegationApp";

const Register = () => {
  const Mensaje_Error =
    "Error: Ya existe una cuenta registrada con este correo electrónico. Por favor, utiliza una dirección de correo electrónico diferente o inicia sesión en tu cuenta existente.";
  const [correo, setCorreo] = useState("");
  const [contraseña, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const history = useHistory();

  const handleRegister = async (event) => {
    try {
      event.preventDefault();
      const response = await authService.register(
        JSON.stringify({ nombre, apellidos, correo, contraseña })
      );
      if (response.data) {
        setCorreo("");
        setPassword("");
        setNombre("");
        setApellidos("");
        history.push("/login");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(Mensaje_Error);
      } else {
        console.log("Error details:", error.response);
      }
    }
  };

  return (
    <div>
      <NavegationApp></NavegationApp>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Registrar</h3>
                <form onSubmit={handleRegister}>
                  <div className="mb-3">
                    <input
                      required
                      type="text"
                      placeholder="Nombre"
                      className="form-control"
                      id="Nombre"
                      aria-describedby="Nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      required
                      type="text"
                      placeholder="apellidos"
                      className="form-control"
                      id="apellidos"
                      aria-describedby="apellidos"
                      value={apellidos}
                      onChange={(e) => setApellidos(e.target.value)}
                    />
                  </div>
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
                    Registrarse
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

export default Register;
