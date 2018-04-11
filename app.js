var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Salmon Greek", image: "http://theshoppersweekly.com/wp-content/uploads/2018/03/camping.jpg"},
        {name: "Granite Hill", image: "https://i1.trekearth.com/photos/99406/tentipi.jpg"},
        {name: "Mountain Goats Rest", image: "https://onmilwaukee.com/images/articles/ca/camping/camping_fullsize_story1.jpg"}
];


app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    
    
    res.render("campgrounds",{campgrounds:campgrounds});
});


app.post("/campgrounds", function(req, res){
    //res.send("YOU HIT THE POST ROUTE!")
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!")
});