/* globals require */


let express = require("express"),
    session = require("express-session"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    passport = require("passport"),
    logger = require("morgan"),
    error;

let path = require("path");


module.exports = function(app, config) {

    //require("../routers")(app);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(session({
      secret: "fb login",
      resave: true,
      saveUninitialized: true
    }));

    app.set("views", path.join(config.rootPath, "app/views/"));
    app.set("view engine", "pug");

    app.use("/public", express.static(path.join(config.rootPath, "public")));
    app.set('view options', { layout: false });

    app.use(logger("dev"));

    app.use(passport.initialize());
    app.use(passport.session());

    // app.use((req, res, next) => {
    //     //console.log(res);
    //     // console.log(res);
    //     // console.log(next);
    //     error = new Error("Not Found");
    //     error.status = 404;
    //     next(error);
    // });
};
