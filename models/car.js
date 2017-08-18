'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarSchema = new Schema({
	
	title: {
		type: String,
		required: true
	},
	make: {
		type: String,
		required: true
	},
	model: {
		type: Number,
		required: true
	},
	color: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	price: Number,
	city: String,
	created_at: {
		type: Date,
		default: Date.now
	},
	owner: {
		type: Schema.ObjectId,
		ref: 'UserSchema'
	},
	contact_name: String,
	contact_email: String,
	image_link: String
});

module.exports = mongoose.model('Car', CarSchema);