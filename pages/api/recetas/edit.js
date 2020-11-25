// Importo base de datos de firebase;
import { db } from 'lib/firebase';

export default async (req, res) => {
    const {
        user_id,
        titulo,
        descripcion,
        categoria,
        ingredientes,
        tiempoPreparacion,
        tiempoCoccion,
        porciones,
        pasos,
    } = req.body;

    return await db
    .collection("recetas")
    .doc (id)
    .set (
    {
        user_id,
        titulo,
        descripcion,
        categoria,
        ingredientes,
        tiempoPreparacion,
        tiempoCoccion,
        porciones,
        pasos,
    })
    .then(() => {
        console.log("Firebase 4 - Post edited");
        res.status(200).json({ message: 'Post editado', titulo});
        res.end();
    })
    .catch((error) =>
    console.log("Hubo un problema editando el post amix", error));
};