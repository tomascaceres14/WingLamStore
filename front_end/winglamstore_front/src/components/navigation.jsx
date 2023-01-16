import React from "react";

const navigation = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/308113565_466618708839025_6142562156122396440_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG3n51YKgzFg-zyEgIzsl8A7KPV77bBBdLso9XvtsEF0nrEfG7_krgkENqSol1iOESDNy-jioKuv0FIcVJRNx1I&_nc_ohc=_8FbT0eElaAAX8oI5Mh&_nc_ht=scontent.fcor2-1.fna&oh=00_AfBeonVPuoBMiNBAsW8YC12OFMj5yfU_IDbLxrV6-8tasA&oe=63C8DEB8" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-toggler"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-toggler">
          <ul class="navbar-nav d-flex justify-content-center align-items-center">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                Institucion
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Clases
              </a>
            </li>
            <li class="nav-item" href="#">
              <a class="nav-link">Profesores</a>
            </li>
            <li class="nav-item" href="#">
              <a class="nav-link">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navigation;
