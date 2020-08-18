const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/react-todo-app'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/react-todo-app/index.html'));
});

var server = app.listen(process.env.PORT || 3000, function () {
   var port = server.address().port;
   console.log("Sovellus käynnissä portissa ", port)
 });