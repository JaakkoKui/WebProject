const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user:'root',
    password: 'rootnoot',
    connectionLimit: 5,
    database: 'omatprojektit'
});
async function getPosts() {
    let conn;
    let data = [];
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * from post");
        data = rows;//[ {val: 1}, meta: ... ]

    } finally {
        if (conn) {
            conn.end();
            // eslint-disable-next-line no-unsafe-finally
            return mapArray(data);
        }
        // eslint-disable-next-line no-unsafe-finally
        return data;
    }
}

async function getPost(id) {
    let conn;
    let data = [];
    let com = [];
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * from post where postId = ?", [id]);
        const comments = await conn.query("SELECT * FROM comment WHERE postId = ?", [id]);
        data = rows[0];//[ {val: 1}, meta: ... ]
        com = comments;

    } finally {
        if (conn) {
            conn.end();
            // eslint-disable-next-line no-unsafe-finally
            return mapOne(data, com);
        }
        // eslint-disable-next-line no-unsafe-finally
        return data;
    }
}

async function addPost(post) {
    let conn;
    let data = [];
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("INSERT INTO post VALUES (0, ?, 0, 0, 1, ?)", [post.content, post.title]);
        data = rows;//[ {val: 1}, meta: ... ]

    } finally {
        if (conn) {
            conn.end();
            // eslint-disable-next-line no-unsafe-finally
            return data;
        }
        // eslint-disable-next-line no-unsafe-finally
        return data;
    }
}
async function addComment(id, comment) {
    let conn;
    let data = [];
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("INSERT INTO comment VALUES (0, ?, 0, 0, ?)", [comment, id]);
        data = rows;//[ {val: 1}, meta: ... ]

    } finally {
        if (conn) {
            conn.end();
            // eslint-disable-next-line no-unsafe-finally
            return data;
        }
        // eslint-disable-next-line no-unsafe-finally
        return data;
    }
}
/*{
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
},*/

function mapArray(from) {
    let postArray = []
    for(let post of from) {
        postArray.push(mapOne(post, []))
    }
    return postArray;
}

function mapOne(from, comments) {
    return {
        "id": from.postId,
        "title": from.title,
        "content": from.content,
        "likes": from.likes,
        "dislikes": from.dislikes,
        "comments": mapComments(comments)
    }
}

function mapComments(comments) {
    let commentArray = [];
    for(let comment of comments) {
        commentArray.push({"content": comment.text, "likes": comment.likes, "dislikes": comment.dislikes});
    }
    return commentArray;
}

module.exports = {
    getPosts,
    getPost,
    addPost,
    addComment
};