const express = require('express');
const app = express();
const port = 8081;
const cors = require("cors");

app.use(cors());
app.use(express.json());

//Mallintaa tietokantaa
let posts = [
    {
        "id": 1,
        "title": "this is a title",
        "content": "t has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem",
        "comments": [{
            "content": "this is a comment",
            "likes": 1,
            "dislikes": 2
        }],
        "likes": 2,
        "dislikes": 2
    },
    {
        "id": 2,
        "title": "this is also a title",
        "content": "t has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem",
        "comments": [],
        "likes": 0,
        "dislikes": 2
    },
];

app.get('/api/posts', (req, res) => {
    res.json(posts);
});
app.get('/api/posts/:id', (req, res) => {
    console.log(posts)
    console.log(req.params.id)
    res.json(posts.find(x => x.id == req.params.id));
});

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
});