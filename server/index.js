const axios = require('axios')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const massive = require('massive')
const path = require('path')
require('dotenv').config()


const app = express()
const port = process.env.PORT || 4040
const ac = require('./controllers/AuthCtrl.js')
const cc = require('./controllers/CartCtrl.js')
const sc = require('./controllers/StoreCtrl.js')

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('Connected to DB');
}).catch(e => {
  console.log('Unable to connect to DB:', e);
})

app.use(bodyParser.json())

app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}))


app.use( express.static( `${__dirname}/../build` ) );


//ENDPOINTS BELOW
app.get('/auth/callback', ac.auth)
app.get('/api/currentuser', (req, res) => {
  res.send(req.session.user)
})
app.get('/api/logout', (req, res) => {
  req.session.destroy()
  res.sendStatus(200)
})
app.get('/api/chameleons', sc.getItems)
app.get('/api/chameleons/:id', sc.getOne)
app.get('/api/cart', cc.getCart)
app.post('/api/cart', cc.addItem)
app.delete('/api/cart/:id', cc.removeItem)
app.put('/api/cart/add', cc.plusItem)
app.put('/api/cart/remove', cc.minusItem)

//ENDPOINTS ABOVE

app.listen(port, () => {
  console.log('Stealing info on port', port);
})
