const express = require('express');
const app = express();

const {infoCursos} = require('./datos/cursos');

//  Routers

const routerProgramacion = require('./routers/programacion');
app.use('/api/cursos/programacion', routerProgramacion);


const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);



// Routing

app.get('/', (req, res) => {
    res.send('Mi pagina principal (primer servidor con Express)');
});

app.get(`/api/cursos`, (req, res) => {
    res.send(JSON.stringify(infoCursos));
});


// Programación

// Matematicas


const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO,() => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});

 
