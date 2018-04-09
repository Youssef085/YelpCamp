var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Salmon Greek", image: "http://theshoppersweekly.com/wp-content/uploads/2018/03/camping.jpg"},
        {name: "Granite Hill", image: "https://i1.trekearth.com/photos/99406/tentipi.jpg"},
        {name: "Mountain Goats Rest", image: "https://onmilwaukee.com/images/articles/ca/camping/camping_fullsize_story1.jpg"}
    ]
    
    res.render("campgrounds",{campgrounds:campgrounds});
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!")
});