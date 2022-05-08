# webprojekti

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### API kuvaus

```
GET /api/posts
```
Hakee kaikki postaukset, palauttaa:
```
[
    {
        "id": number,
        "title": String,
        "content": String,
        "likes": number,
        "dislikes": number,
        "comments": []
    }
]
```
---

```
GET /api/posts/:id
```

Hakee yhden postauksen id:n perusteella. Palauttaa:
```
{
    "id": number,
    "title": String,
    "content": String
    "likes": number,
    "dislikes": number,
    "comments": [
        {
            "id": number,
            "content": String,
            "likes": number,
            "dislikes": number
        }
    ]
}
```
---

```
POST /api/posts/
```
####Body
```
{
    "title": String,
    "content": String 
}
```

Lisää postauksen. Palauttaa:
```
[
    {
        "id": number,
        "title": String,
        "content": String,
        "likes": number,
        "dislikes": number,
        "comments": []
    }
]
```
---


```
POST /api/posts/:id/comment
```
####Body
```
{
    "comment": String
}
```

Lisää kommentin id yhdistää postaukseen. Palauttaa:
```
{
    "id": number,
    "title": String,
    "content": String
    "likes": number,
    "dislikes": number,
    "comments": [
        {
            "id": number,
            "content": String,
            "likes": number,
            "dislikes": number
        }
    ]
}
```
---


```
POST /api/posts/comment/:id/like
```

Tykkää kommentista kommentin id:n avulla. Palauttaa:
```
{
    "commentId": number,
    "text": String,
    "likes": number,
    "dislikes": number,
    "postId": number
}
```
---


```
POST /api/posts/comment/:id/dislike
```

dislikee kommentista kommentin id:n avulla. Palauttaa:
```
{
    "commentId": number,
    "text": String,
    "likes": number,
    "dislikes": number,
    "postId": number
}
```
---


```
POST /api/posts/:id/like
```

tykkää postauksesta id:n avulla. Palauttaa tykätyn postauksen:
```
{
    "id": number,
    "title": String,
    "content": String
    "likes": number,
    "dislikes": number,
    "comments": [
        {
            "id": number,
            "content": String,
            "likes": number,
            "dislikes": number
        }
    ]
}
```
---


```
POST /api/posts/:id/dislike
```

dislikee postauksesta id:n avulla. Palauttaa disliketyn postauksen:
```
[
    {
        "id": number,
        "title": String,
        "content": String,
        "likes": number,
        "dislikes": number,
        "comments": []
    }
]
```
---


```
DELETE /api/posts/:id
```

Poistaa postauksen. Palauttaa kaikki postaukset:
```
[
    {
        "id": number,
        "title": String,
        "content": String,
        "likes": number,
        "dislikes": number,
        "comments": []
    }
]
```
---

