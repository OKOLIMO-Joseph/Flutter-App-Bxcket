const express = require('express');
const app = express()
const port = 6000;

app.listen(
    port,
    () => console.log(`The server is running at port ${port}`)
);

app.get('/', (req, res) =>{
    res.send('welcome...')
})

app.get('/staff', (req, res) =>{
    res.send('Staff get request created successfully')
});

app.get('/admin', (req, res) =>{
    res.send('Admin get request has been successfully created')
});

app.get('/guests', (req, res) =>{
    res.send('The guests get request had been created successfully')
})

app.post('/guest', (req, res) => {
    res.status(201).send({ message: 'Data received', data });

})