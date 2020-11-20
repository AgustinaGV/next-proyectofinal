// Importo base de datos de firebase;
import { db } from 'lib/firebase';

export default async (req, res) => {
    const {
        id
    } = req.body;

    return await db
    .collections ("recetas")
    .doc(id)
    .delete()
    .then(() => {
        console.log("Firebase 4 - Post borrado");
        res.status(200).json ({ message: 'Post borrado ', id})
        res.end();
    })
    .catch ((error) =>
    console.log("Hubo un error borrando el post amis ", error));
};