import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { Container } from './styled';

const FormEditar = ({values, handleEditFormClose}) => {
    const {id, user_id, titulo, descripcion, categoria} = values;
    const [message, setMessage] = useState('');

    return (
        <Container>
            <Formik
            initialValues = {( titulo, descripcion, categoria )}
            validate={values => {
                const errors = {};
                if (!values.titulo) {
                    errors.titulo = 'Requerido';
                }
                if (!values.descripcion) {
                    errors.descripcion = 'Requerido';
                }
                if (!values.categoria) {
                    errors.categoria= 'Requerido';
                }
                return errors;
            }}
            onSubmit = {
                async (values, {setSubmitting}) => {
                    try {
                        const res = await axios.post('/api/recetas/edit', {...values, id, user_id});
                        const data = await res.data;
                        setSubmitting(false);
                        setMessage(`Post editado, ${data.titulo} (${res.status})`);
                        handleEditFormClose();
                    } catch (error) {
                        if (error.response) {
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                        } else if (error.request) {
                            console.log(error.requuest);
                        } else {
                            console.log('Error ', error.message);
                        }
                        console.log(error);
                    }
                }
            }
            >
                {({ isSubmitting }) => {
                    <Form>
                        <div className="input_row">
                            <Field type="text" name="title" placeholder="Título" />
                            <ErrorMessage name="title" component="div" />
                        </div>
                        <div className="input_row">
                            <Field type="text" name="categoria" placeholder="Categoría" />
                            <ErrorMessage name="company" component="div" />
                        </div>
                        <div className="input_row">
                            <Field as="textarea" type="content" name="descripcion" placeholder="Descripción" />
                            <ErrorMessage name="content" component="div" />
                        </div>
                        <button type="submit" disabled={isSubmitting} className="orange">
                            Editar
                        </button>
                    </Form>
                }}
            </Formik>
            <p>{message}</p>
        </Container>
    )
}

export default FormEditar;