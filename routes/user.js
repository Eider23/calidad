const express = require('express');
const routes = express.Router();
const authController = require('../controller/auth');
const authRole = require('../controller/role');


routes.get('/auth', authController.get);
routes.get('/role', authRole.get)

module.exports = routes;