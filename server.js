const express = require("express")

const app = express()

app.set('view engine','jade');
app.use(express.static('public'))
app.get('/', function(req, res){
    res.render('index', {title:'unamed'})
})
app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0" , function (err) {
  if (err) return console.log('Hubo un error'+ err), process.exit(1);

  console.log('server is listening on port 3000');
})
