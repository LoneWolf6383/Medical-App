const mongoose = require('mongoose');

module.exports = () => {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/medical_app', {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        
        console.log('Connection successfull');
    } catch (error) {
        console.log(error,'failed'); 
    }
}