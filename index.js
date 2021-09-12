

const tickets = (input) => {

    const mensajeExito = `Si tenemos el dinero suficiente para devolver al cliente`;
    const mensajeError = `No tenemos el dinero suficiente para devolver al cliente`;
    const costoBase = 25;
    let vuelto = 0;
    let todoOk = false;

    // primer cliente y necesitamos vuelto!
    if(input[0] <= costoBase){
        let cambios = [];
        input.map((entrada) => {

            // descontamos el costoBase de la entrada actual
            vuelto = entrada - costoBase;
            
            if(vuelto !== 0){
                cambios.map((cambio) => {
                    // evaluamos cambio valido y que no descontemos m'as de la cuenta
                    if(cambio && vuelto !== 0){
                        // descontamos el vuelto pendiente
                        vuelto -= cambio;
                        // eliminamos el cambio que ya devolvimos de nuestra billetera (arreglo)
                        delete cambios[cambio];
                        // solo agregamos a nuestra billetera (arreglo) el valor cuando concluyamos con la entrega del vuelto
                        vuelto === 0 && cambios.push(entrada);
                    }
                });
            } else {
                // agregamos los valores referentes al costoBase
                cambios.push(entrada);
            }
            
            // se evalua si el vuelto actual cumple condiciones
            todoOk = vuelto===0;
        })
    } else {
        console.log(mensajeError)
    }

    console.log(todoOk ? mensajeExito : mensajeError)

}

tickets([25, 25, 50, 50, 100]);
