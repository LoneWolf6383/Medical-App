let {PythonShell} = require('python-shell')

let options = {
  args: [0]
};

PythonShell.run('my_script.py', options, function (err, results) {
  if (err) throw err;
  console.log(results);
});