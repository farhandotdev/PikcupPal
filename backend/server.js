const express = require('express');
const con = require('./mysqlDB');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static("public"));

app.get('/login', (req, res)=>{
    const query = "select * from users";
    con.query(query, (err, result)=>{
        res.end(JSON.stringify(result));
    })
    // res.end("Hello World");
})

app.get("/", (req, res) => {
 res.sendFile(path.join(__dirname, "../public", "html", "index.html"));
});

app.get('/login', (req, res)=>{
    const query = "select * from users";
    con.query(query, (err, result)=>{
        res.end(JSON.stringify(result));
    })
    // res.end("Hello World");
})

app.listen(port, ()=>{
    console.log(`Server listening at ${port}`)
});
