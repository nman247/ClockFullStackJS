const express = require('express');
const http = require('http');

const dotenv = require('dotenv').config();
const app = express();
const port = process.env.Port || 8080; 

app.use(express.json());
var today = new Date();
var Hours = today.getHours();
var Minutes = today.getMinutes();
const path = require('path');

app.use(express.static(__dirname))
app.set('views', path.join(__dirname, '../Client'))
app.set("view engine", "ejs");
var Time = `${Hours}:${Minutes}`
var server = http.createServer(app)
server.listen(port, ()=>{(console.log(`Server running on Port: ${port}`));});
app.get("/clock", (req, res) => {
    res.render('clock', {Time:Time});

    
app.get("/greet", (req, res)=> {
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
   
    res.end('Hello World!');
  })
})
app.get("/clock.png", (req, res) => {
    res.sendFile(path.join(__dirname , "../image/clock.png"));
  });



