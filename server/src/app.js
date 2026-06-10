const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const notes = []

app.get('/', (req, res) => {
    res.render('index', {notes})
})

app.post('/notes', (req, res) => {
    notes.push(req.body)

    // res.status(201).json({
    //     message: "note created"
    // })
    res.status(201).redirect('/')
})

app.get('/notes/:index', (req, res) => {
    const index = req.params.index
    notes.splice(index,1)
    res.redirect("/")
    console.log("Title deleted")
})

module.exports = app