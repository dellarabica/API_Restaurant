const express = require('express');
const port = 5555;
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.listen(port, () => {
    console.log('Server running on localhost:' + port);
});

//root
app.get('/', (req, res) => {
    res.send('Bienvenue sur mon site');
});

//ORDRE --> RECUP / NEW / EDIT / DELETE

//Repas
app.get('/dishes', (req, res) => {
    res.send('Page contenant les plats disponibles');
});
app.get('/dishes/:id', (req, res) => {
    res.send('Page contenant les plats disponibles');
});
app.post('/dishes', (req, res) => {
    res.send('Page contenant les plats disponibles');
});
app.patch('/dishes/:id', (req, res) => {
    res.send('Page contenant les plats disponibles');
});
app.delete('/dishes/:id', (req, res) => {
    res.send('Page contenant les plats disponibles');
});

//Plat commandé
app.get('/d-order', (req, res) => {
    res.send('Page contenant les infos sur le plat commandé');
});
app.get('/d-order/:id', (req, res) => {
    res.send('Page contenant les infos sur le plat commandé');
});
app.post('/d-order', (req, res) => {
    res.send('Page contenant les infos sur le plat commandé');
});
app.patch('/d-order/:id', (req, res) => {
    res.send('Page contenant les infos sur le plat commandé');
});
app.delete('/d-order/:id', (req, res) => {
    res.send('Page contenant les infos sur le plat commandé');
});


//Personnes achetant le plat
app.get('/d-customer', (req, res) => {
    res.send('Page contenant les personnes ayant acheté le plat');
});
app.get('/d-customer/:id', (req, res) => {
    res.send('Page contenant les personnes ayant acheté le plat');
});
app.post('/d-customer', (req, res) => {
    res.send('Page contenant les personnes ayant acheté le plat');
});
app.patch('/d-customer/:id', (req, res) => {
    res.send('Page contenant les personnes ayant acheté le plat');
});
app.delete('/d-customer/:id', (req, res) => {
    res.send('Page contenant les personnes ayant acheté le plat');
});


//Personne
app.get('/person', (req, res) => {
    res.send('Page contenant les données des personnes inscrites');
});
app.get('/person/:id', (req, res) => {
    res.send('Page contenant les données des personnes inscrites');
});
app.post('/person', (req, res) => {
    res.send('Page contenant les données des personnes inscrites');
});
app.patch('/person/:id', (req, res) => {
    res.send('Page contenant les données des personnes inscrites');
});
app.delete('/person/:id', (req, res) => {
    res.send('Page contenant les données des personnes inscrites');
});


//Client
app.get('/customer', (req, res) => {
    res.send('Panneau de contrôle du client');
});
app.get('/customer/:id', (req, res) => {
    res.send('Panneau de contrôle du client');
});
app.post('/customer', (req, res) => {
    res.send('Panneau de contrôle du client');
});
app.patch('/customer/:id', (req, res) => {
    res.send('Panneau de contrôle du client');
});
app.delete('/customer/:id', (req, res) => {
    res.send('Panneau de contrôle du client');
});

//Restaurateur -> admin
app.get('/admin', (req, res) => {
    res.send('Panneau de contrôle de l\'administrateur');
});
app.get('/admin/:id', (req, res) => {
    res.send('Panneau de contrôle de l\'administrateur');
});
app.post('/admin', (req, res) => {
    res.send('Panneau de contrôle de l\'administrateur');
});
app.patch('/admin/:id', (req, res) => {
    res.send('Panneau de contrôle de l\'administrateur');
});
app.delete('/admin/:id', (req, res) => {
    res.send('Panneau de contrôle de l\'administrateur');
});

//Commande
app.get('/order', (req, res) => {
    res.send('Page contenant la commande du client');
});
app.get('/order/:id', (req, res) => {
    res.send('Page contenant la commande du client');
});
app.post('/order', (req, res) => {
    res.send('Page contenant la commande du client');
});
app.patch('/order/:id', (req, res) => {
    res.send('Page contenant la commande du client');
});
app.delete('/order/:id', (req, res) => {
    res.send('Page contenant la commande du client');
});
