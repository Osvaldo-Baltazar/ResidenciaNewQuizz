import React from "react";
import logo from "../Img/logo_ITT-1242765813.png";

const NavegationApp = () => {
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
              <a className="nav-link" aria-current="page" href="/register">
                Registrarse
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Iniciar sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavegationApp;
