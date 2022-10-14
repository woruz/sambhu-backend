

const history = require('./history')
const root = require('./root')
const workSpace = require('./workSpace')


const routes = app => {
    root(app),
    workSpace(app),
    history(app)
}

module.exports = routes