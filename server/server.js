const express = require('express')
const cors = require('cors')
const app = express()
const connection = require('./db')
const path = require('path');
var bodyParser = require('body-parser');
const lungCancer = require('./routes/verifyLungCancer')
const getSymptoms = require('./utility/getSymptoms')
const verifyLungCancer = require('./routes/verifyLungCancer')
const verifyDiabetes = require('./routes/verifyDiabetes.js')
const verifyHypoThyroid =  require('./routes/verifyHypoThyroid')
const verifyHeartDisease = require('./routes/verifyHeartDisease')
const addUser = require('./routes/addUser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
connection()
app.use(cors())
app.use(express.json())

app.use('/addUser',addUser)
app.use('/lungCancer', lungCancer)
app.use('/getSymptoms',getSymptoms)
app.use('/verifyLungCancer',lungCancer)
app.use('/verifyDiabetes', verifyDiabetes)
app.use('/verifyHeartDisease',verifyHeartDisease)
app.use('/verifyHypoThyroid',verifyHypoThyroid)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'build','index.html'))
    })
}
const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log('Server fired up at',port);
})