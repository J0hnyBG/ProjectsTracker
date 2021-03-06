/* mongoose global */
"use strict";

const mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    SimpleUserSchema = require("./partial/simple-user-schema"),
    SimpleTaskSchema = require("./partial/task-schema");
let mongoosePaginate = require("mongoose-paginate");

let ProjectSchema = new Schema({
    title: {
        type: String,
        minLength: 2,
        maxLength: 120,
        required: true
    },
    description: {
        type: String,
        minLength: 10,
        maxLength: 100000
    },
    leadUser: {
        type: SimpleUserSchema,
        ref: "User"
    },
    isPrivate: {
        type: Boolean,
        required: true
    },
    users: [SimpleUserSchema],
    tasks: [SimpleTaskSchema]
},
    { timestamps: true }
);

ProjectSchema.query.byTitle = function(name) {
    return this.find({ title: name });
};

ProjectSchema.plugin(mongoosePaginate);

let Project;
mongoose.model("Project", ProjectSchema);
Project = mongoose.model("Project");
module.exports = Project;