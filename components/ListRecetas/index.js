import { useState, useEffect } from 'react';
import { db } from 'lib/firebase';
import Link from 'next/link';
import axios from 'axios';
import { FormEditar } from 'components';

const ListRecetas = ({ userId }) => {
    const [recetas, setRecetas] = useState([]);
    const [recetasToEdit, setRecestasToEdit] = useState ('');

    useEffect (() => {
        db
            .collection("recetas")
            .where("user_id", "==", userId)
            .onSnapshot(snap => {
                const recetasDB = snap.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
            })
    }, []);

    const handleEdit = async (id) => {
        setRecetasToEdit(id);
    }

    const handleEditFormClose = () => {
        setRecetasToEdit('');
    }

    const handleDelete = async (id) => {
        try {
            const res = await axios.post('/api/recetas/delete', { id });
            const data = await res.data;
            console.log(res.status);
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error ', error.message);
            }
            console.log(error);
        }
    }

    return (
        <ul>
            {recetas && recetas.map(({ id, user_id, titulo, descripcion, categoria}) =>
            <li key={id}>
                <Link href={`/recetas/${id}`}>
                    <a>{titulo}</a>
                </Link>
                <button
                    onClick={() => handleEdit(id)}>
                    Editar
                </button>
                <button
                    onClick={() => handleDelete(id)}>
                    Borrar
                </button>
                {id === recetasToEdit && 
                <FormEditar values={{ id, user_id, titulo, descripcion, categoria}} handleEditFormClose={handleEditFormClose}/>
                }

            </li>)}
        </ul>
    )
}

export default ListRecetas;