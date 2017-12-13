var express =  require('express');
var cors = require('cors');

const app = express();
app.use(cors());

app.set('port', (process.env.PORT || 4000));

app.get('/', function(request, response) {
  response.send('JavaScript Starter Project - served by Node Express Webserver!')
});

app.get('/quibbles', function(req, res) {
    // Mocking a database
    res.json([
      {"id": 1, "category":"Technology", "text":"Old programmers never die .. they just lose their memory."},
      {"id": 2, "category":"Science", "text":"I'm reading a book about anti-gravity. It's impossible to put down."},
      {"id": 3, "category":"Computer", "text":"Did you hear about the computer technician who received third degree burns? He touched the firewall."}
    ]);
  });

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port')); 
});
