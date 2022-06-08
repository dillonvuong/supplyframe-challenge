require('dotenv').config()
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()

const indexRouter = require('./routes/index')

// Static Files
app.use(express.static("public"))
app.use('/styles', express.static(__dirname + 'public/styles'))
app.use('/javascript', express.static(__dirname + 'public/javascript'))
app.use('/images', express.static(__dirname + 'public/images'))

// Set Views
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout')
app.use(expressLayouts)


app.use('/', indexRouter)


// 404 page
app.use((req,res) => {
    res.status(404).render('404');
})

// Listen on port 3000
app.listen(process.env.PORT || 3000)