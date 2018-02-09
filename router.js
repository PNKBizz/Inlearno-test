const express = require('express')
const jsonfile = require('jsonfile')
const { promisify } = require('util')

const readJsonAsync = promisify(jsonfile.readFile)
const writeJsonAsync = promisify(jsonfile.writeFile)

const router = express.Router()

router.get('/api/data', async (req, res) => {
    try {
        const data = await readJsonAsync('./src/temp/data.json')
        res.send(data.data)
    } catch (err) {
        res.status(500).send('Something went wrong')
    }
})

router.get('/api/details/:id', async (req, res) => {
    try {
        const details = (await readJsonAsync('./src/assets/details.json')).details
        const currentDetails = details.filter(item => +item.id === +req.params.id)[0]
        if (currentDetails) { res.json(currentDetails) }
        else { res.status(404).send('Item with current id not found') }
    } catch (err) {
        res.status(500).send('Something went wrong')
    }
})

module.exports = router
