const path = require("path");
const express = require("express");
//const { response } = require("express");

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public"); //use '../' to go up within the root

app.set("view engine", "hbs"); //set up handlebars npm package
app.use(express.static(publicDirectoryPath)); //this is in place of each page being created separately

app.get("", (req, res) => {
  //home page sp string is empty

  res.render("index"); //match up with the index.hbs file
});

console.log(__dirname); //directery name
console.log(path.join(__dirname, "../public"));
console.log(path.join(__dirname, "../views"));

/*****************STARTING THR SERVER ************** */
app.listen(3000, () => {
  //this is to send the code to the browser
  //port 3000 - developer port; (http- port 80)

  console.log("server is running on port 3000");
});

//use this to check which ports are running: sudo lsof -i :3000
//then canterminate via: kill -9 PID

/* //this is now redundent b/c of the public file
app.get("", (req, res) => {
  //address of the page
  //homepage
  //requester & response

  //res.send("Shalom world");

  res.send("<h1>Home page<h1>"); //the HTML is put within the string
}); //let's us configure
*/

/**************HELP***************** */

/*

app.get("/help", (req, res) => {
  res.send({ name: "Dovid", age: 77 }); //can send an array or object. automatically stringify the object for us
});
*/
/*************ABOUT******************* */
/*
app.get("/about", (req, res) => {
  res.send('<h1>About Page:<h1>');
});

*/
/*********WEATHER**************** */
/*
app.get("/weather", (request, response) => {
  response.send({temp:12,rain:'no'});
});
*/
//app.com
//app.com/help
//app.com/about

//access in the browser via: localhost:[port], so in this case: "localhost:3000", then "localhost:3000/about"

/************HTML concepts */

//see lecture 46 in node course about html and css
/*
<!DOCTYPE.html>

header and body 














*/
