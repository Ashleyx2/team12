const express = require('express')

const app = express()
const PORT = process.env.PORT || 9000

app.get('/', (req, res) => {
    res.send(`<h2>Server has started on ${PORT}</h2>`)
})

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`)
})
