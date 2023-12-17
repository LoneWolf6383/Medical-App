const mongoose = require('mongoose');

const heartDiseaseSchema = new mongoose.Schema(
    {
        _id :{ type:String,required:true },
        age :{ type:String,required:true },
        sex :{ type:String,required:true },
        cp :{ type:String,required:true },
        trestbps :{ type:String,required:true },
        chol :{ type:String,required:true },
        fbs :{ type:String,required:true },
        restecg :{ type:String,required:true },
        thalach :{ type:String,required:true },
        exang :{ type:String,required:true },
        oldpeak :{ type:String,required:true },
        slope :{ type:String,required:true },
        ca :{ type:String,required:true },
        thal :{ type:String,required:true },
        target :{ type:String,required:true },
    },
    {
        collection:'heart_disease'
    }
)
const heartDisease = mongoose.model('heartDisease',heartDiseaseSchema)
module.exports={heartDisease}