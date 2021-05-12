const { Comment } = require('../models');

const commentData = [
    {
        user_id: '1',
        post_id: '2',
        comment_text: 'I actually prefer Foundation'
    },
    {
        user_id: '2',
        post_id: '3',
        comment_text: 'W3Schools has been a great resource for me!'
    },
    {
        user_id: '3',
        post_id: '4',
        comment_text: 'Google maps, mine is'
    },
    {
        user_id: '4',
        post_id: '5',
        comment_text: 'I find it very effective and intuitive'
    },
    {
        user_id: '5',
        post_id: '1',
        comment_text: 'This web app looks great!'
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;