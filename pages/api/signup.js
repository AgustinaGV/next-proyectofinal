export default (req, res) => {

    // no aparece en el console log del cliente;
    console.log('Console log backend ', req.body);

    const { values} = req.body;


    // aca en el medio vamos a hacer la interaccion con la base de datos;



    res.statusCode = 200;
    res.json({ message: `Te registraste correctamente, bienvenide ${values.email} :)`, email: values.email })
  }