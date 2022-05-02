const express = require('express');
const app = express();
const port = 8081;
const cors = require("cors");
const DAO = require("./dao.js");

app.use(cors());
app.use(express.json());

//Mallintaa tietokantaa
/*let posts = [
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
];*/

app.get('/api/posts', async (req, res) => {
    let posts = await DAO.getPosts();
    res.json(posts);
});
app.get('/api/posts/:id', async (req, res) => {
    let post = await DAO.getPost(req.params.id);
    res.json(post);
});

app.post('/api/posts', async (req, res) => {
    let ress = await DAO.addPost(req.body);
    console.log(ress);
    res.json(await DAO.getPosts());
})

app.post("/api/posts/:id/comment",  async(req, res) => {
    let response = await DAO.addComment(req.params.id, req.body.comment);
    console.log(response);
    res.json(await DAO.getPost(req.params.id));
})

/*app.post("/api/posts/:id/comment/like",  async(req, res) => {
    let response = await DAO.likeComment(req.params.id);
    console.log(response);
    res.json(await DAO.getPost(req.params.id));
})*/

app.post("/api/posts/:id/like", async (req, res) => {
    let response = await DAO.likePost(req.params.id);
    console.log(response);
    res.json(await DAO.getPost(req.params.id));
})

app.post("/api/posts/:id/dislike", async (req, res) => {
    let response = await DAO.dislikePost(req.params.id);
    console.log(response);
    res.json(await DAO.getPosts());
})

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
});