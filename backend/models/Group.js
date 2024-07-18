const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
       
    },
    description: {
        type: String,
      
    },
    members: {
        type: [String],
        
    },
   
    category: {
        type: String,
        
    },
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
