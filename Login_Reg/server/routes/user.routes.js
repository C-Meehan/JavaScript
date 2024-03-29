const UserController = require('../controllers/user.controller')

module.exports = app => {
    app.post('/api/register', UserController.registerUser)
    app.post('/api/login', UserController.login)
    app.post('/api/logout', UserController.logout)
}