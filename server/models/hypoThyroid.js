const mongoose = require('mongoose');

const hypoThyroidSchema = new mongoose.Schema(
    {
        _id :{ type:String,required:true },
        age :{ type:String,required:true },
        sex :{ type:String,required:true },
        on_thyroxine :{ type:String,required:true },
        query_on_thyroxine :{ type:String,required:true },
        on_antithyroid_medication :{ type:String,required:true },
        sick :{ type:String,required:true },
        pregnant :{ type:String,required:true },
        thyroid_surgery :{ type:String,required:true },
        I131_treatment :{ type:String,required:true },
        query_hypothyroid :{ type:String,required:true },
        query_hyperthyroid :{ type:String,required:true },
        lithium :{ type:String,required:true },
        goitre :{ type:String,required:true },
        tumor :{ type:String,required:true },
        hypopituitary :{ type:String,required:true },
        psych :{ type:String,required:true },
        TSH_measured :{ type:String,required:true },
        TSH :{ type:String,required:true },
        T3_measured :{ type:String,required:true },
        T3 :{ type:String,required:true },
        TT4_measured :{ type:String,required:true },
        TT4 :{ type:String,required:true },
        T4U_measured :{ type:String,required:true },
        T4U :{ type:String,required:true },
        FTI_measured :{ type:String,required:true },
        FTI :{ type:String,required:true },
        TBG_measured :{ type:String,required:true },
        TBG :{ type:String,required:true },
        referral_source :{ type:String,required:true },
        binaryClass :{ type:String,required:true },
    },
    {
        collection:'heart_disease'
    }
)
const hypoThyroid = mongoose.model('hypoThyroid',hypoThyroidSchema)
module.exports={hypoThyroid}