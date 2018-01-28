var express=require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 8080;

app.use(express.static((__dirname, 'shared')))



app.get('/2', function(req, res) {
	// ejs render automatically looks in the views folder
	res.sendFile(path.join(__dirname + '/shared/index.html'));
});
app.get('/', function(req, res) {
	// ejs render automatically looks in the views folder
	res.sendFile(path.join(__dirname + '/shared/index0.html'));
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
