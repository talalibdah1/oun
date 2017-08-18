'use strict';

var mongoose = require('mongoose'),
	Car = mongoose.model('Car');

exports.create_car = function(req,res){
	var new_car = new Car(req.body);
	new_car.owner = req.user._id;
	new_car.contact_name = req.user.fullName;
	new_car.contact_email = req.user.email;
	new_car.save(function(err,car){
		if (err)
			res.send(err);
		res.json(car);
	});
};

exports.update_car = function(req,res){
	Car.findOneAndUpdate({_id:req.params.carId}, req.body, {new:true}, function(err,car){
		if(err)
			res.send(err);
		res.json(car);
	});
};

exports.find_all_cars = function(req,res){
	Car.find({}, function(err, car){
		if(err)
			res.send(err);
		res.json(car);
	});
};

exports.find_a_car = function(req,res){
	Car.findOne({_id:req.params.carId}, function(err, car){
		if(err)
			res.send(err);
		res.json(car);
	});
};

exports.find_car = function(req,res){
	console.log('color is '+req.query.color);
	console.log('title is '+req.query.title);
	let qur = [
	{color: req.query.color},
	{title: { $regex: req.query.title, $options: 'i' } }
	];
	Car.find({
		$or: qur
	}, function(err,car){
		if(err)
			res.send(err);
		res.json(car);
	});
};