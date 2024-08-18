const axios = require('axios')
const fetchPosts = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return res.data
    } catch (error) {
        console.log('Error fetching posts',error);
        throw error
        
    }
}
module.exports = {
    fetchPosts
}