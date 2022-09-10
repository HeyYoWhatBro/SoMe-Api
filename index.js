const express = require('express');
const errHandler = require('./middleware/errHandler.js');
const fs = require('fs');
const app = express()
const path = require('path')

app.get('/', async(req,res) => {
res.status(200).json({ Server: 'Ready!' })
})
require('./lib/dynamic.js')(app)
app.use(express.json())
app.use(errHandler)
app.all('*', async (req, res) => { if(!res.headersSent){ res.status(505).sendFile(path.join(__dirname, '/middleware/error.html')); }})
app.use(require('./lib/dynamic.js'))

app.listen(3001, async() => {
console.log('ready')
})