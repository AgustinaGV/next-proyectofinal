import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { Container } from "./styled";

const FormRecetas = ({ userId }) => {
  const [message, setMessage] = useState("");
  return (
    <Container>
      <h1>Crear receta</h1>
      <Formik
        initialValues={{
          titulo: "",
          descripcion: "",
          categoria: "salado",
          ingredientes: "",
          tiempoPreparacion: "",
          tiempoCoccion: "",
          porciones: "",
          pasos: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.titulo) {
            errors.titulo = "Requerido";
          }
          if (!values.descripcion) {
            errors.descripcion = "Requerido";
          }
          if (!values.categoria) {
            errors.categoria = "Requerido";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const res = await axios.post("/api/recetas/create", {
              ...values,
              user_id: userId,
            });
            const data = await res.data;
            setSubmitting(false);
            setMessage(`Receta creada, grax ${data.titulo} (${res.status})`);
          } catch (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log("Error ", error.message);
            }
            console.log(error);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="input_row">
              <Field type="text" name="titulo" placeholder="Título" />
              <ErrorMessage name="titulo" component="div" />
            </div>
            <div className="input_row">
              <span>Categoría:</span>
              <Field as="select" name="categoria" placeholder="Categoría">
                <option value="salado">Salado</option>
                <option value="dulce">Dulce</option>
              </Field>
              <ErrorMessage name="company" component="div" />
            </div>
            <div className="input_row">
              <Field
                as="textarea"
                type="content"
                name="descripcion"
                placeholder="Descripción"
              />
              <ErrorMessage name="descripcion" component="div" />
            </div>
            <div className="input_row">
              <Field
                as="textarea"
                type="content"
                name="ingredientes"
                placeholder="Ingredientes"
              />
              <ErrorMessage name="ingredientes" component="div" />
            </div>
            <div className="input_row">
              <Field
                type="text"
                name="tiempoPreparacion"
                placeholder="Tiempo de preparación"
              />
              <ErrorMessage name="tiempoPreparacion" component="div" />
            </div>
            <div className="input_row">
              <Field
                type="text"
                name="tiempoCoccion"
                placeholder="Tiempo de cocción"
              />
              <ErrorMessage name="tiempoCoccion" component="div" />
            </div>
            <div className="input_row">
              <Field
                type="text"
                name="porciones"
                placeholder="¿Cuántas porciones rinde?"
              />
              <ErrorMessage name="porciones" component="div" />
            </div>
            <div className="input_row">
              <Field
                as="textarea"
                type="content"
                name="pasos"
                placeholder="Paso a paso"
              />
              <ErrorMessage name="pasos" component="div" />
            </div>

            <button type="submit" disabled={isSubmitting} className="botonForm">
              Publicar
            </button>
          </Form>
        )}
      </Formik>
      <p>{message}</p>
    </Container>
  );
};

export default FormRecetas;
