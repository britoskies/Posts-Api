const axios = require('axios');

// Database
const db = [];

const getPostsFromDB = (tags, sortBy = null, direction = null) => {
    return new Promise((res, rej) => {
        axios.get(`https://api.hatchways.io/assessment/blog/posts?tag=${tags}&sortBy=${sortBy}&direction=${direction}`)
            .then(req => {

                let data = req.data.posts

                // If tags are present
                if (tags) {
                    db.push(data);
                    res(data)
                }

                // If either sortBy or direction is present
                if (sortBy) {
                    if (direction === "desc") {
                        data = data.sort((a, b) => (b[sortBy] > a[sortBy] ? 1 : -1));
                    } else {
                        data = data.sort((a, b) => (b[sortBy] < a[sortBy] ? 1 : -1));
                    }
                }
            })
            .catch(err => console.log(err));
    })
}


module.exports = getPostsFromDB;