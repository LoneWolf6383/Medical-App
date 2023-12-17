const router = require('express').Router()
const {hypoThyroid} = require('../models/hypoThyroid')

router.post('/', async(req, res)=> {
    try {
        var output
        const python = spawn('python', ['predictors/NaiveBayes_Thyroid.py',JSON.stringify(req.body)])
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