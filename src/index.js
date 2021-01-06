const express = require('express')
const body = require('body-parser')
const twig = require('./utils/twig')

const app = express()

const input = require('./in')
const output = require('./out')

app.use(body.urlencoded({ extended: false }))

app.post('/out', (req, res) => {
    twig.renderFile('./templates/out.twig', output(req.body), (_err, html) => res.end(html))
})

app.get('/', (_req, res) => {
    twig.renderFile('./templates/in.twig', { input: input() }, (_err, html) => res.end(html))
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on ${port} ...`))
