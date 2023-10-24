module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller")

    var router = require('express').Router();

    //create a new tutorial
    router.post("/https://tutorialsbackend.onrender.com/", tutorials.create);

    //retrieve all tutorials
    router.get("/https://tutorialsbackend.onrender.com/", tutorials.findAll);

    //retrieve all published tutorials
    router.get("/https://tutorialsbackend.onrender.com/published", tutorials.findAllPublished);

    //retrieve a single tutorials with id
    router.get("/https://tutorialsbackend.onrender.com/:id", tutorials.findOne);

    //update a tutorial with id
    router.put("/https://tutorialsbackend.onrender.com/:id", tutorials.update);

    //delete a tutorial with an id
    router.delete("/https://tutorialsbackend.onrender.com/:id", tutorials.delete)

    //delete all tutorials 
    router.delete("/https://tutorialsbackend.onrender.com/", tutorials.deleteAll);

    app.use("/https://tutorialsbackend.onrender.com/", router);
}