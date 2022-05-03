const express = require('express');
const app = express();
const port = 8081;
const cors = require("cors");
const DAO = require("./dao.js");

app.use(cors());
app.use(express.json());

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

app.post("/api/posts/comment/:id/like",  async(req, res) => {
    let response = await DAO.likeComment(req.params.id);
    console.log(response);
    res.json(await DAO.getComment(req.params.id));
})

app.post("/api/posts/comment/:id/dislike",  async(req, res) => {
    let response = await DAO.dislikeComment(req.params.id);
    console.log(response);
    res.json(await DAO.getComment(req.params.id));
})

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

app.delete("/api/posts/:id", async (req, res) => {
    let response = await DAO.deletePost(req.params.id);
    console.log(response);
    res.json(await DAO.getPosts())
})

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
});