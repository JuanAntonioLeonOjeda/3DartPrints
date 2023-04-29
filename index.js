require('dotenv').config()
const morgan = require('morgan')
const express = require('express')
const app = express()
const cors = require('cors')


const {
    checkConnection,
    syncModels
} = require('./database/index')

const addRelationsToModels = require('./database/relations')

async function startDB() {
    await checkConnection()
    await addRelationsToModels()
    await syncModels('alter')

}

function startExpress() {
        app.use(cors())
        app.use(express.json())
        app.use(morgan('dev'))


        .use('/api', require('./api/routes/index'))

        .listen(process.env.PORT, () => {
            console.log(`Listenting on port ${process.env.PORT}`)
        })
}

async function start() {
    await startDB()
    startExpress()
}

start()
