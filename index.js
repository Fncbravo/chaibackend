require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "Fncbravo",
    "id": 118635012,
    "node_id": "U_kgDOBxI6BA",
    "avatar_url": "https://avatars.githubusercontent.com/u/118635012?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Fncbravo",
    "html_url": "https://github.com/Fncbravo",
    "followers_url": "https://api.github.com/users/Fncbravo/followers",
    "following_url": "https://api.github.com/users/Fncbravo/following{/other_user}",
    "gists_url": "https://api.github.com/users/Fncbravo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Fncbravo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Fncbravo/subscriptions",
    "organizations_url": "https://api.github.com/users/Fncbravo/orgs",
    "repos_url": "https://api.github.com/users/Fncbravo/repos",
    "events_url": "https://api.github.com/users/Fncbravo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Fncbravo/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Sujeet Baisane",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "I'm a student and I'm Looking forward to contribute.",
    "twitter_username": "Sujeetstwt",
    "public_repos": 21,
    "public_gists": 0,
    "followers": 3,
    "following": 15,
    "created_at": "2022-11-19T20:43:06Z",
    "updated_at": "2024-10-09T13:25:59Z"
  }

app.get('/', (req,res)=>{
    res.send('Hello world')
})
app.get('/twitter', (req,res)=>{
    res.send('sujeetstwt')
})
app.get('/login', (req,res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})
app.get('/youtube', (req,res)=>{
    res.send('<h2>Chai aur code</h2>')
})
app.get('/github', (req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, ()=> {
    console.log(`Example app listening on port ${port}`);
    
})