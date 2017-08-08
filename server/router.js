const express=require('express');
const request = require('request');
const testController=require('./controllers/TestController');
module.exports =function(app)
{
	const apiRoutes=express.Router();
	app.use('/api',apiRoutes);
	//get and post methods//
	apiRoutes.get('/helloworld',testController.helloworld);
	apiRoutes.get('/getFaclistByStateId/:id',testController.getFaclistByStateId);
	apiRoutes.get('/getAllState',testController.getAllState);
	apiRoutes.post('/addState',testController.addStateDetails);
   //get and post methods//
}