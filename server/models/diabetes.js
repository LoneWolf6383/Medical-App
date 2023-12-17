const mongoose = require('mongoose');

const diabetesSchema = new mongoose.Schema(
    {
        _id :{ type:String,required:true },
        Pregnancies :{ type:String,required:true },
        Glucose :{ type:String,required:true },
        BloodPressure :{ type:String,required:true },
        SkinThickness :{ type:String,required:true },
        Insulin :{ type:String,required:true },
        BMI :{ type:String,required:true },
        DiabetesPedigreeFunction :{ type:String,required:true },
        Age :{ type:String,required:true },
        Outcome :{ type:String,required:true },
    },
    {
        collection:'diabetes'
    }
)
const diabetes = mongoose.model('diabetes',diabetesSchema)
module.exports={diabetes}