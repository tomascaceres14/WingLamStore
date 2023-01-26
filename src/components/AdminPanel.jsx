import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

const AdminPanel = () => {
  const publish = (values) => {
    axios
      .post("http://localhost:8080/api/v1/products", values)
      .then((e) => console.log(e));
  };

  return (
    <Formik
      initialValues={{
        name: "",
        price: "",
        imgUrl: "",
      }}
      onSubmit={publish}
    >
      <Form className="container productsForm">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Título del producto:
          </label>
          <Field name="name" id="name" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Precio (ARS):
          </label>
          <Field
            name="price"
            id="price"
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imgUrl" className="form-label">
            Url de imagen:
          </label>
          <Field
            name="imgUrl"
            id="imgUrl"
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-success">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default AdminPanel;
