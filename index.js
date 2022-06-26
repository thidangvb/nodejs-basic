const express = require('express')
const app = express() 
const port = 4499

app.get('/home', (req, res) => res.send('test express server'))

app.listen(port, () => console.log(`listening at http://localhost:${port}`))
