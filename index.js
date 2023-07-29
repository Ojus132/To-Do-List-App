import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

const todayTaskList = new Array();
const workTaskList = new Array();
let i = 0, j = 0;

app.post("/todaySubmit", (req, res) => {
    todayTaskList[i] = req.body.newTask;
    i++;
    res.render("today.ejs", {tasks : todayTaskList })
});

app.post("/workSubmit", (req, res) => {
    workTaskList[j] = req.body.newTask;
    j++;
    res.render("today.ejs", {tasks : workTaskList })
});

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/today", (req, res) => {
    res.render("today.ejs", {tasks : todayTaskList});
})

app.get("/work", (req, res) => {
    res.render("work.ejs", {tasks : workTaskList});
})


app.listen(port, () => {
    console.log("Server hosted on port " + port);
});