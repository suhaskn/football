// const express = require('express')
// const db = require('./db')
// const app = express()
// const port = 3000
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const express = require('express')
const bodyParser = require('body-parser')

//const Team = require('./team/model')
//const db = require('./db')

const teamRouter = require('./team/router')
const playerRouter = require('./player/router')

const jsonParser = bodyParser.json()
const app = express()

app.use(jsonParser)
app.use(teamRouter)
app.use(playerRouter)

app.listen(4000)