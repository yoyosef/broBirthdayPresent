var express = require('express');
var app = express();
const cors = require('cors')
app.use(cors());

const log = console.log


const xlsxFile = require('read-excel-file/node');
 
const arr = []
xlsxFile('./data.xlsx').then((rows) => {
    for(let i = 0; i < rows.length; i++){
        arr.push(rows[i][0])
    }
});

app.get('/random', function(req, res){
    const a = arr[Math.round(Math.random() * arr.length)];
    console.log(a)
    res.status(200).send({url: a})
});

app.use(express.static(__dirname + "/frontend/"));

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/frontend/index.html");
});


const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
});
