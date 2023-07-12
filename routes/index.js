const root = require('./root')
const sampleText = require('./sampleText')


const routes = app => {
    root(app),
    sampleText(app)
}

module.exports = routes