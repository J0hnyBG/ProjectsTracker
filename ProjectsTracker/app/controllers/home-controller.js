const Project = require("../models/project-model");
const data = require("../data")({
  Project
});


module.exports = {
  homePage(req, res) {
    res.render("../views/index.pug");
  },  
 
  // getProjectByTitle(req, res) {
  //     data.getProjectById("58334d6b40d7d934243bb133").then((projects) => { console.log(projects) }); //res.render("../views/test.pug", { projects }));
  // }

};
