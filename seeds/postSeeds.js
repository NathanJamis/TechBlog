const { Post } = require('../models');

const postData = [
    {
        title: "TechBlog",
        post_text: "TechBlog is live! Sign in to post or comment about tech news and updates",
        user_id: "1",
    },
    {
        title: "Bootstrap or Bulma?",
        post_text: "Many often ask which CSS framework to use. Which do you prefer?",
        user_id: "2",
    },
    {
        title: "Python",
        post_text: "Python seems like a fun coding language to learn. Does anyone have any resources?",
        user_id: "3",
    },
    {
        title: "Favorite API?",
        post_text: "What is everyone's favorite API to use? Mine is Yelp Fusion.",
        user_id: "4",
    },
    {
        title: "VS Code",
        post_text: "Visual Studio Code is by far my favorite application for coding.",
        user_id: "5",
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;