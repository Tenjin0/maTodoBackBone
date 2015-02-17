express = require 'express'
hbs = require 'hbs'
session = require 'cookie-session'

app = express()

app.set 'view engine', 'html'
app.engine 'html', hbs.__express

app.use(session(secret: 'todotopsecret'))

app.get '/todo', (req, res) ->
	res.render 'index'
app.use("/javascripts", express.static(__dirname + "/javascripts"));
app.use (req, res, next) ->
	res.redirect '/todo'
	next()
.listen 8081
