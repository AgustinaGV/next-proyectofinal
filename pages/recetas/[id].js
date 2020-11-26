import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import axios from 'axios';

import { CardReceta } from 'components';

// Importo base de datos de firebase;
import { db } from "lib/firebase";


export default function SingleRecipe(props) {

    console.log('PROPS', props);
    return (<div>
        <div>Receta: {props.titulo}</div>
        <div>Descripción: {props.descripcion}</div>
        <div>Categoria: {props.categoria}</div>
        <div>Ingredientes: {props.ingredientes}</div>
        <div>Tiempo de preparación: {props.tiempoPreparacion}</div>
        <div>Tiempo de cocción: {props.tiempoCoccion}</div>
        <div>Rinde: {props.porciones} porciones</div>
        <div>Paso a paso: {props.pasos}</div>
    </div>);
};


export const getServerSideProps = async ({ query }) => {
    let recetaObj = {};

    await db
        .collection('recetas')
        .doc(query.id)
        .get()
        .then(async result => {
            recetaObj = { 
                id: query.id,
                titulo: result.data().titulo, 
                descripcion: result.data().descripcion,
                categoria: result.data().categoria, 
                ingredientes: result.data().ingredientes, 
                tiempoPreparacion: result.data().tiempoPreparacion, 
                tiempoCoccion: result.data().tiempoCoccion,
                porciones: result.data().porciones, 
                pasos: result.data().pasos, }

            //await db
              //  .collection('users')
                //.doc(recetaObj.user_id)
                //.get()
                //.then(result => {
                  //  userObj = { email: result.data().email, nombre: result.data().nombre }
                //});
        });
    return {

        props: {
            titulo: recetaObj.titulo,
            descripcion: recetaObj.descripcion,
            categoria: recetaObj.categoria,
            ingredientes: recetaObj.ingredientes,
            tiempoPreparacion: recetaObj.tiempoPreparacion,
            tiempoCoccion: recetaObj.tiempoCoccion,
            porciones: recetaObj.porciones,
            pasos: recetaObj.pasos,
        },
    };
};
