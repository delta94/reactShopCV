const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const favicon = require('serve-favicon')

app.use(express.static(__dirname));
app.use(favicon(path.join(__dirname,'src/img/favicon.png')));

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname,'index.html'))
});

app.listen(port)
console.log('Server started in port ', port);
