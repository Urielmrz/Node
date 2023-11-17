const express = require('express');
const app = express();

const {infoCursos} = require('./datos/cursos');

//Contenido estatico

//app.use( express.static('public') )
//app.get('*', (req, res) => {
//   res.sendFile(__dirname + '/public/404.html');
//})

//  Routers

const routerProgramacion = require('./routers/programacion');
app.use('/api/cursos/programacion', routerProgramacion);


const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);


// Routing-

app.get('/', (req, res) => {
    res.send('Esta es mi pagina principal');
    
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

 
