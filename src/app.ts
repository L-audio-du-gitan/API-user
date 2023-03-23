const express = require('express');
const app = express();


app.get('/', (req: any, res: any) => {
    res.status(201).send('Hello world !')
});

app.get('/users', (req: any, res: any) => {
    res.status(200).send('Liste des utilisateurs')
});

app.listen(8080, () => {
    console.log("Server Up");
});

