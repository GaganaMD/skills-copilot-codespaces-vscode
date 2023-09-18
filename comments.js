// Create web server

// Import express
const express = require('express');

// Create router
const router = express.Router();

// Import comments controller
const commentsController = require('../controllers/comments');

// Get all comments
router.get('/', commentsController.getAllComments);

// Get a comment by id
router.get('/:id', commentsController.getCommentById);

// Create a new comment
router.post('/', commentsController.createComment);

// Update a comment by id
router.put('/:id', commentsController.updateComment);

// Delete a comment by id
router.delete('/:id', commentsController.deleteComment);

// Export router
module.exports = router;