const { User } = require('../models');

const userData = [
    {
        username: 'Anakin_Skywalker',
        email: 'darthvader@empire.com',
        password: 'ihatesand1'
    },
    {
        username: 'Ben_Kenobi',
        email: 'obiwan@jedicouncil.com',
        password: 'highground2'
    },
    {
        username: 'Yoda',
        email: 'grandmaster@jedicouncil.com',
        password: 'dagobah3'
    },
    {
        username: 'Mace_Windu',
        email: 'jedimaster@jedicouncil.com',
        password: 'purple4'
    },
    {
        username: 'Ahsoka_Tano',
        email: 'snips@padawan.com',
        password: 'fulcrum5'
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;