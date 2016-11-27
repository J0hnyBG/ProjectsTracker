/* globals require module */
module.exports = function(server, controller) {
    // let router = server.Router();

    server.get("/projects", controller.viewAllProjects);
    server.get("/projects/create", controller.getRegister);
    server.post("/projects/create", controller.postProject);
    server.get("/project/:name");
    server.get("/projects/:id", controller.getProjectById);
        // server.get("/project/:name", controller.loadProject);
};