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
    .doc ()
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
        console.log("Firebase 4 - Post creado");
        res.status(200).json({ message: 'Post creado', titulo});
        res.end();
    })
    .catch((error) =>
    console.log("Hubo un problema creando el post amix", error));
};