var express = require('express');
var app = express();
var path = require('path');
var public = path.join(__dirname, 'public');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});

app.use('/', express.static(public));

app.listen(process.env.PORT || 8086, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });