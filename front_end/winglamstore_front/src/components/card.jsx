import React from "react";

const card = () => {
  return (
    <div className="d-flex">
      <div className="card">
        <img
          src="https://cdn3.volusion.com/whuse.hwccj/v/vspfiles/photos/MHS-DitDaJow-2.jpg?v-cache=1643911388"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body text-center">
          <h5 className="card-title">Producto Generico 1</h5>
          <p className="card-text">$500</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://http2.mlstatic.com/D_NQ_NP_728718-MLA51883273997_102022-V.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body text-center">
          <h5 className="card-title">Producto Generico 2</h5>
          <p className="card-text">$4300</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default card;
