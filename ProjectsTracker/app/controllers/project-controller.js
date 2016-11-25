/* globals require */
const Project = require("../models/project-model");
const data = require("../data")({ Project });

module.exports = {
    viewAllProjects(req, res) {
        data.getAllProjects().then(projects => res.render("../views/projects.pug", { projects }));
    },
    getRegister(req, res) {        
        res.render("../views/create-project.pug", ({  }));
        //data.createProject(req.title, req.leadUser, req.descripion).then(project => res.render("../views/create-project.pug", { project }));
    },
    postProject(req, res){
      console.log(req.body);
    }
};
