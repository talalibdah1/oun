'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Agent = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the agent'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  author: {
    type: Schema.ObjectId,
    ref: 'UserSchema'
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'approved']
    }],
    default: ['pending']
  },
  client_access_token: String,
  developer_access_token: String,
  projectId: String
});

module.exports = mongoose.model('Agent', Agent);