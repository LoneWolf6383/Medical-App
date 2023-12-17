const mongoose = require('mongoose');

const lungCancerSchema = new mongoose.Schema(
    {
        _id: { type: String, required: true },
        GENDER: { type: String, required: true },
        AGE: { type: String, required: true },
        SMOKING: { type: String, required: true },
        YELLOW_FINGERS: { type: String, required: true },
        ANXIETY: { type: String, required: true },
        PEER_PRESSURE: { type: String, required: true },
        CHRONIC_DISEASE: { type: String, required: true },
        FATIGUE: { type: String, required: true },
        ALLERGY: { type: String, required: true },
        WHEEZING: { type: String, required: true },
        ALCOHOL_CONSUMING: { type: String, required: true },
        COUGHING: { type: String, required: true },
        SHORTNESS_OF_BREATH: { type: String, required: true },
        SWALLOWING_DIFFICULTY: { type: String, required: true },
        CHEST_PAIN: { type: String, required: true },
        LUNG_CANCER: { type: String, required: true },
    },
    {
        collection:'lung_cancer'
    }
)
const lungCancer = mongoose.model('lungCancer',lungCancerSchema)
module.exports={lungCancer}