// src/components/Navegation.js
import React from "react";
import authService from "../services/authService";
import { useHistory } from "react-router-dom";
import logo from "../Img/logo_ITT-1242765813.png";

const Navegation = () => {
  const history = useHistory();

  const HandleSignOut = async () => {
    authService.signOut();
    history.push("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#6eb274" }}
    >
      <div className="container-fluid">
        <img
          src={logo}
          alt="Logo"
          style={{ width: "50px", marginRight: "10px" }}
        />
        <a className="navbar-brand" href="/home">
          Tecnologico
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">
                Inicio
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/Menu"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </a>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" onClick={HandleSignOut}>
                    Cerrar sesión
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navegation;
