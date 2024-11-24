const { registrar, leer} = require('./operaciones');

const [operacion, nombre, edad, tipoAnimal, colorAnimal, enfermedad] = process.argv.slice(2);

if (operacion === 'registrar'){
    registrar(nombre, edad, tipoAnimal, colorAnimal, enfermedad);
}else if (operacion === 'leer'){
    leer();
}else {
    console.log('Usa "registrar" o "leer"');
}
