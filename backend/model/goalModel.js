const mongoose = require('mongoose');


const goalSchema = new mongoose.Schema(
     {    
          user: {
               type: mongoose.Schema.Types.ObjectId, 
               required: true, 
               ref: 'User'
          },
          username: {
               type: String, 
          },
          text: {
          type: String,
          required: [true, 'Please add a text value']
     }}, {
    timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema )