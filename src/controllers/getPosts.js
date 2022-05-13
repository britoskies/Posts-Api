const response = require('../lib/response');
const getPostsFromDB = require('../models/dataset');

// Validation methods
const validateTags = (tags) => {
    const existingTags = ["science", "history", "design", "tech", "health", "politics", "startups", "culture"];
    let includedTags = tags.map(tag => existingTags.includes(tag));
    return includedTags.includes(false) ? false : true;
}

const validatesortBy = (sort = null) => {
    const validSorts = ["id", "reads", "likes", "popularity"];
    if (sort === null) return true;
    return validSorts.includes(sort) ? true : false;
}

const validateDirection = (direction = null) => {
    const validDirection = ["desc", "asc"];
    if (direction === null) return true;
    return validDirection.includes(direction) ? true : false;
}

// Handle posts method
const getPosts = (req, res) => {

    const { tags, direction, sortBy } = req.query;

    // Checking if tags is present
    if (!tags) {
        return response.error(req, res, "Tags parameter is required", 404);
    }

    const splittedTags = tags.split(',');

    // Error handling of parameters
    if (!validateTags(splittedTags)) {
        return response.error(req, res, "tags parameter is invalid", 400)
    }

    if (!validatesortBy(sortBy)) {
        return response.error(req, res, "sortBy parameter is invalid", 400);
    }

    if (!validateDirection(direction)) {
        return response.error(req, res, "direction parameter is invalid", 400);
    }

    // Handling of posts from dataset
    getPostsFromDB(tags, sortBy, direction)
        .then(data => response.success(req, res, {
            posts: data
        }, 200))
        .catch(err => response.error(req, res, err, 404));
}

module.exports = { getPosts };