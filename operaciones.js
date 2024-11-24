const fs = require('fs');

const registrar = (nombre, edad, tipoAnimal, colorAnimal, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));

    const nuevaCita = {
        nombre,
        edad,
        tipoAnimal,
        colorAnimal,
        enfermedad
    };

    citas.push(nuevaCita);

    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2), 'utf-8');
    console.log('Cita registrada.');
};

const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json','utf-8'));

    console.log(citas);
}
module.exports = {registrar, leer};