// dependencies 
//====================================//
var connection = require("../config/config.js");
var Projects = require('../models/projectCreate.js')
var moment = require('moment');
moment().format();


//Routes
//======================//
module.exports = function(app){

    //Get the Project//
    app.get('/api/all', function(req, res){
        Events.findAll({}).then(function(results){
           res.json(results); 
        });
        
    });
// Add a new Project
    app.post('/api/new', function(req, res){
        console.log('project data:');
        console.log(req.body);
        Projects.create({
            author: req.body.author,
            project_name: req.body.project_name,
            team_name: req.body.team_name,
            members: req.body.members,
            roles:req.body.roles,
            description: req.body.description,
            s_date: req.body.s_date,
            e_date: req.body.e_date
        }).then(function(results){
            res.json(results);
        });

        
    });
};