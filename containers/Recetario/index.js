import {Container as RecetarioContainer} from './styled';
import { Card } from 'components';
import { useState, useEffect } from 'react';
import { db } from 'lib/firebase';
import Link from 'next/link';
import axios from 'axios';


const Recetario = () => {

    const [recetas, setRecetas] = useState([]);
    useEffect (() => {
        db.collection("recetas")
        .onSnapshot((snap) => {
            const recetasDB = snap.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setRecetas(recetasDB);
        });
    })

    return (
        <RecetarioContainer>
            <h1>Recetario</h1>
            <div>
                {recetas.length ?
                recetas.map((receta) => {
                    return (
                        <Card titulo={receta.titulo} src="" alt={receta.titulo}/>
                    );
                }) : <h1>Cargando...</h1>}
            </div>

        </RecetarioContainer>
    )
}

export default Recetario