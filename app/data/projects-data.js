/* globals require module Promise */
"use strict";

module.exports = function (models) {
    let { Project } = models;

    return {
        createProject(title, description, leadUser, type) {
            let isPrivate = false;
            let tasks = [];
            let users = [];
            if (type === "private") {
                isPrivate = true;
            }

            let project = new Project({
                title,
                description,
                leadUser,
                isPrivate,
                tasks,
                users
            });

            return new Promise((resolve, reject) => {
                project.save((err) => {
                    if (err) {
                        console.log(err);
                        return reject(err);
                    }

                    return resolve(project);
                });
            });
        },
        getAllProjects() {
            return new Promise((resolve, reject) => {
                Project.find((err, projects) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(projects);
                });
            });
        },
        getProjectByTitle(title) {
            return new Promise((resolve, reject) => {
                Project.find()
                    .byTitle(title)
                    .exec((err, project) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(project);
                    });
            });
        },
        getProjectById(id) {
            return new Promise((resolve, reject) => {
                Project.findOne({ _id: id }, (err, project) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(project);
                });
            });
        },
        searchProjects(title) {
            let query = { "title": new RegExp(`${title}`, "i") };
            return new Promise((resolve, reject) => {
                Project.find(query)
                    .exec((err, projects) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(projects);
                    });
            });
        },
        addUserToProject(projectId, userId) {
            this.getProjectById(projectId).then(project => {
                project.users.push(userId);
            });
        },
        addTaskToProject(projectId, task) {
            this.getProjectById(projectId).then(project => {
                project.tasks.push(task);
            });
        }    
    };
};


//  TODO:   createProject(title, description, leadUser, users, bugs) {
//             let project = new Project({
//                 title,
//                 description,
//                 leadUser,
//                 users,
//                 bugs
//             });

//             return new Promise((resolve, reject) => {
//                 project.save((err) => {
//                     if (err) {
//                         console.log(err);
//                         return reject(err);
//                     }

//                     return resolve(project);
//                 });
//             });
//         }