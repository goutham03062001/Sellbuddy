const mongoose = require("mongoose");
const ProfileSchema = mongoose.Schema({

    userId:{
        type : mongoose.Schema.Types.ObjectId,
        require:true
    }

    


});

module.exports = Profile = mongoose.model("profile",ProfileSchema);