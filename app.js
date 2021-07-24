require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlerbars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials', ( err ) => {console.log( err )})

// Servir contenido estatico
app.use( express.static( 'public' ) );

app.get('/', ( req, res ) => {
    res.render('home', {
        nombre: 'Sebastian Ayala',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', ( req, res ) => {
    res.render('generic', {
        nombre: 'Sebastian Ayala',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', ( req, res ) => {
    res.render('elements', {
        nombre: 'Sebastian Ayala',
        titulo: 'Curso de Node'
    });
})

app.get('*', ( req, res ) => {
    res.status(404);
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port);