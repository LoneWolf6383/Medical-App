const spawn = require('child_process').spawn
// const {PythonShell} = require('python-shell')

// options = {
    // pythonPath: 'C:\\Users\\Namasivaayam 007\\Documents\\College\\4th Sem Lab\\Mini Project\\DA-AI\\MedicalApp\\utility\\getSymptoms.py',
//     args: ['diabetes']
// };
// PythonShell.run('./getSymptoms.py', options, function (err, results) {
//     console.log('inside shell');
//     if (err){
//         console.log('error');
//         throw err;}
//     output = results
//     console.log(output);
// });
// const python = spawn('python', ['./getSymptoms.py','diabetes'])
// python.stdout.on('data', function (data) {
//     console.log('Pipe data from python script ...');
//     output = data.toString();
// });
// python.on('close', (code) => {
//     console.log(output);
//     console.log(`child process close all stdio with code ${code}`);
//     // send data to browser
//     // return res.send(output);
//     console.log(output);
// });
var output
const python = spawn('python', ['C4.5_LungCancerprediciton.py','hi'])
python.stdout.on('data', function (data) {
    output = data.toString();
});
python.stderr.on('data', (data) => {
    console.log('err',data.toString());
})
python.on('close', (code) => {
    console.log(output);
});