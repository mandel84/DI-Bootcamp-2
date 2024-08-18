const express = require('express')
const {fetchPosts} = require('./data/dataService')
const app = express()
const PORT = 5002

app.get('/posts',async(req,res) =>{
    try {
        const posts = await fetchPosts()
        console.log('Dta succesfully retrieved and sent as as a response');
        res.json(posts)
        
    } catch (error) {
        res.status(500).send('Error fetching posts')
        
    }
})

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})

