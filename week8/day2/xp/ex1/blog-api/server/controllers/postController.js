const Post = require('../models/post');

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll()
        res.json(posts)
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching posts' })
    }
};

exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id)
        if (post) {
            res.json(post)
        } else {
            res.status(404).json({ error: 'Post not found' })
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the post' })
    }
};

exports.createPost = async (req, res) => {
    try {
        const newPost = await Post.create(req.body)
        res.status(201).json(newPost)
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the post' })
    }
};

exports.updatePost = async (req, res) => {
    try {
        const [updated] = await Post.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated) {
            const updatedPost = await Post.findByPk(req.params.id)
            res.json(updatedPost);
        } else {
            res.status(404).json({ error: 'Post not found' })
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the post' })
    }
};

exports.deletePost = async (req, res) => {
    try {
        const deleted = await Post.destroy({
            where: { id: req.params.id },
        });
        if (deleted) {
            res.status(204).send()
        } else {
            res.status(404).json({ error: 'Post not found' })
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the post' })
    }
};
