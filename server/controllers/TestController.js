const request = require('request');
const config_setting =require('../utils/generalconfig');
exports.helloworld=function(req,res,next)
{
	res.status(200).json({
		message:"Hello world"
	})
}

exports.getFaclistByStateId=function(req,res,next)
{
	   var fac_id = req.params.id;
 request(config_setting.basic_url+''+'get_all_fac_list_by_state_id/'+fac_id,function(error,response,body)
{
	if(!error&&response.statusCode==200)
		{
			res.send(body);
		}
		else
			{
				res.json(error);
			}
})
}

//get method
exports.getAllState=function(req,res,next)
{
 request(config_setting.basic_url+''+'get_all_countries_list',function(error,response,body)
{
	if(!error&&response.statusCode==200)
		{
			res.send(body);
		}
		else
			{
				res.json(error);
			}
})
}
//get method

//post method
exports.addStateDetails=function(req,res,next)
{
	var state_name = req.body.state_name;
	var country_id = req.body.country_id;
	var post={state_name:state_name,country_id:country_id};
 request.post({url:config_setting.basic_url+''+'add_state_details',formData:post},function(error,response,body)
{
		if(!error&&response.statusCode==200)
		{
		res.send(body);
		}
		else
		{
		res.json(error);
		}
})
}
//post method