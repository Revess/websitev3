const express = require('express');
const app = express();
const http = require('http').Server(app);

var ip_address = "127.0.0.1";

http.listen(5000, function () {
    console.log('listening on ' + ip_address + ':5000');
});

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../app/build/index.html'));
});