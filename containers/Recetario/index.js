import {Container as RecetarioContainer} from './styled';
import { CardReceta } from 'components';
import { useState, useEffect } from 'react';
import { db } from 'lib/firebase';
import axios from 'axios';

import Prepare from '../../images/prepare.svg'

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
            <div className="containerRecetas">
                {recetas.length ?
                recetas.map((receta) => {
                    return (
                        <CardReceta 
                        titulo={receta.titulo} 
                        src={Prepare} 
                        alt={receta.titulo}
                        parrafo={receta.descripcion}
                        href={`/recetas/${receta.id}`}
                        />
                    );
                }) : <h1>Cargando...</h1>}
            </div>

        </RecetarioContainer>
    )
}

export default Recetario