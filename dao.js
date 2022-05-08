const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user:'root',
    password: 'rootnoot',
    connectionLimit: 5,
    database: 'omatprojektit'
});

/**
 * Hakee kannasta kaikki postaukset
 * @returns {Promise<*[]>}
 */
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

/**
 * Hakee yhden postauksen id:n avulla
 * @param {number} id postin id
 * @returns {Promise<{comments: *[], dislikes: *, id: *, title, content, likes: *}|*[]>}
 */
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

/**
 * Lisää postauksen
 * @param post postin body lisältää title ja content
 * @returns {Promise<*[]>}
 */
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

/**
 * Lisää kommentin postaukseen
 * @param id postauksen id
 * @param comment kommentin sisältö
 * @returns {Promise<*[]>}
 */
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

/**
 * Tykkää postauksesta
 * @param id postauksen id
 * @returns {Promise<*[]>}
 */
async function likePost(id) {
    let conn;
    let data = [];
    let post = await getPost(id);
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("UPDATE post SET likes = ? WHERE postId = ?;", [++post.likes ,id]);
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

/**
 * Tykkää kommentista
 * @param id kommentin id
 * @returns {Promise<*[]>}
 */
async function likeComment(id) {
    let conn;
    let data = [];
    let comment = await getComment(id);
    console.log(comment)
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("UPDATE comment SET likes = ? WHERE commentId = ?;", [++comment.likes , id]);
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

/**
 * Dislikee kommentista
 * @param id kommentin id
 * @returns {Promise<*[]>}
 */
async function dislikeComment(id) {
    let conn;
    let data = [];
    let comment = await getComment(id);
    console.log(comment)
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("UPDATE comment SET dislikes = ? WHERE commentId = ?;", [++comment.dislikes , id]);
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

/**
 * Hakee yhden kommentin
 * @param id kommentin id
 * @returns {Promise<*[]|*>}
 */
async function getComment(id) {
    let conn;
    let data = [];
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM comment WHERE commentId = ?;", [id]);
        data = rows;//[ {val: 1}, meta: ... ]

    } finally {
        if (conn) {
            conn.end();
            // eslint-disable-next-line no-unsafe-finally
            return data[0];
        }
        // eslint-disable-next-line no-unsafe-finally
        return data;
    }
}

/**
 * Dislikee postauksesta
 * @param id postin id
 * @returns {Promise<*[]>}
 */
async function dislikePost(id) {
    let conn;
    let data = [];
    let post = await getPost(id);
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("UPDATE post SET dislikes = ? WHERE postId = ?;", [++post.dislikes ,id]);
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

/**
 * poistaa postauksen
 * @param id postin id
 * @returns {Promise<*[]>}
 */
async function deletePost(id) {
    let conn;
    let data = [];
    try {
        conn = await pool.getConnection();
        await conn.query("DELETE FROM comment WHERE postId = ?", [id])
        const rows2 = await conn.query("DELETE FROM post WHERE postId = ?", [id]);
        data = rows2;//[ {val: 1}, meta: ... ]

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


/**
 * Mappaa tietokanta rivi listan haluttavaan muotoon
 * @param from Tietokanta muodossa oleva lista
 * @returns {*[{comments: *[], dislikes: *, id: *, title, content, likes: *}]}
 */
function mapArray(from) {
    let postArray = []
    for(let post of from) {
        postArray.push(mapOne(post, []))
    }
    return postArray;
}

/**
 * Mappaa yhden tietokanta rivin haluttuun muotoon
 * @param from tietokanta rivi
 * @param comments sen kommentit
 * @returns {{comments: *[], dislikes: *, id: *, title, content, likes: *}}
 */
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

/**
 * Mappaa kommentit tietokanta muodosta haluttuun muotoon
 * @param comments
 * @returns {*[]}
 */
function mapComments(comments) {
    let commentArray = [];
    for(let comment of comments) {
        commentArray.push({"id": comment.commentId, "content": comment.text, "likes": comment.likes, "dislikes": comment.dislikes});
    }
    return commentArray;
}

module.exports = {
    getPosts,
    getPost,
    addPost,
    addComment,
    likePost,
    dislikePost,
    likeComment,
    dislikeComment,
    getComment,
    deletePost
};