'use strict';

module.exports = function(app) {
  var todoList = require('../controllers/taskControllers'),
  	userHandler = require('../controllers/userControllers'),
  	agents = require('../controllers/agentControllers'),
  	car = require('../controllers/carControllers');

  // todoList Routes
  app.route('/tasks')
    .get(userHandler.loginRequired, todoList.list_all_tasks)
    .post(userHandler.loginRequired, todoList.create_a_task);

  app.route('/agents')
  	.get(userHandler.loginRequired, agents.list_agents)
  	.post(userHandler.loginRequired, agents.create_agent);

  app.route('/agents/:agentId')
  	.get(userHandler.loginRequired, agents.find_agent)
  	.put(userHandler.loginRequired, agents.update_agent);


  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

  app.route('/auth/register')
  	.post(userHandler.register);

  app.route('/auth/sign_in')
  	.post(userHandler.sign_in);

  app.route('/car')
  	.post(userHandler.loginRequired, car.create_car)
  	.get(userHandler.loginRequired, car.find_car);

  app.route('/car/:carId')
  	.put(userHandler.loginRequired, car.update_car)
  	.get(userHandler.loginRequired, car.find_a_car);

  app.route('/cars')
  	.get(userHandler.loginRequired, car.find_all_cars);
};
