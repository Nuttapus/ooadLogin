const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID
const url = 'mongodb://admin:a123456@ds213896.mlab.com:13896/ooad'
const dbName = 'ooad';
const app = express()
const port = 4001

app.use(bodyParser.json())
app.use(cors())

app.post('/login', (req, res) => {
    mongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
        const db = client.db(dbName)
        db.collection('users').findOne({ username: req.body.username }, (err, result) => {
            if(result !== null){
                res.send(result)
            }else{
                res.send(result)
                client.close();
            }
        });

    });
})

app.listen(port, () => {
    console.log(`App listening on ${port}`)
})