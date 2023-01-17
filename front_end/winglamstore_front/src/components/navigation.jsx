import React from "react";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          WING LAM
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-toggler"
          aria-controls="navbar-toggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-toggler">
          <ul className="navbar-nav d-flex justify-content-center align-items-center">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Institucional
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Eventos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Productos</a>
            </li>
            <li className="nav-item asd">
              <a className="nav-link">Carrito</a>
              <span className="item-count">0</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
