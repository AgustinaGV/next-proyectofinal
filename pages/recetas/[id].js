// Importo base de datos de firebase;
import { db } from "lib/firebase";

const SingleRecipe = (props) => {

    return (
        <>
        <div>Receta: {props.titulo}</div>
        <div>Descripción: {props.descripcion}</div>
        <div>Categoria: {props.categoria}</div>
        <div>Ingredientes: {props.ingredientes}</div>
        <div>Tiempo de preparación: {props.tiempoPreparacion}</div>
        <div>Tiempo de cocción: {props.tiempoCoccion}</div>
        <div>Rinde: {props.porciones} porciones</div>
        <div>Paso a paso: {props.pasos}</div>
        <div>Autor: {props.email}</div>
        </>
    )
}

export const getServerSideProps = async ({ query }) => {
    let blogObj = {};
    let userObj = {}
    await db
        .collection('posts')
        .doc(query.id)
        .get()
        .then(async result => {
            blogObj = { 
                titulo: result.data().titulo, 
                descripcion: result.data().descripcion,
                categoria: result.data().categoria, 
                ingredientes: result.data().ingredientes, 
                tiempoPreparacion: result.data().tiempoPreparacion, 
                tiempoCoccion: result.data().tiempoCoccion,
                categoria: result.data().porciones, 
                ingredientes: result.data().pasos,
                user_id: result.data().email }

            await db
                .collection('users')
                .doc(blogObj.user_id)
                .get()
                .then(result => {
                    userObj = { email: result.data().email, nombre: result.data().nombre }
                });
        });
    return {
        props: {
            titulo: blogObj.titulo,
            descripcion: blogObj.descripcion,
            categoria: blogObj.categoria,
            ingredientes: userObj.ingredientes,
            tiempoPreparacion: blogObj.tiempoPreparacion,
            tiempoCoccion: blogObj.tiempoCoccion,
            categoria: blogObj.categoria,
            ingredientes: userObj.ingredientes,
            userMail: userObj.email,
        }
    }
}

export default SingleRecipe