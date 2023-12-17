const router = require('express').Router()
const { spawn } = require('child_process')

router.post('/', (req, res ) => {
    try {
        var output
        const python = spawn('python', ['utility/getSymptomsPy.py',req.body[0]])
        python.stdout.on('data', function (data) {
            output = data.toString();
        });
        python.stderr.on('data', (data) => {
            console.log('err',data.toString());
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