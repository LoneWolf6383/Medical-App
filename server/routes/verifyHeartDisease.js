const router = require('express').Router()
const {heartDisease} = require('../models/heartDisease')

router.post('/', async(req, res)=> {
    try {
        var output
        const python = spawn('python', ['predictors/KNN_heartdiseasepredicition.py',JSON.stringify(req.body)])
        python.stdout.on('data', function (data) {
            output = data.toString();
        });
        python.stderr.on('data', (data) => {
            console.log(data.toString());
        })
        python.on('close', (code) => {
            return res.send(output);
        });  
        }
        catch (error) {
            return res.send({ message: "Error" });
        }
})
module.exports=router