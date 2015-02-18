# fs = require 'fs'
# https://vimeo.com/91564681
express = require 'express'
# hbs = require 'hbs'
# handlebars = require 'handlebars'
# session = require 'cookie-session'

exphbs = require 'express-handlebars'

app = express()
app.engine 'html', exphbs(
  extname: 'html'
  defaultLayout: 'index.html')
app.set 'view engine', 'html'


# app.engine'hbs', handlebars;
# app.set('views', __dirname + '/views');

# app.set 'view engine', 'html'
# app.engine 'html', hbs.__express

# app.use(session(secret: 'todotopsecret'))

app.get '/todo', (req, res) ->
	res.render 'index'
app.use("/javascripts", express.static(__dirname + "/javascripts"));
app.use (req, res, next) ->
	res.redirect '/todo'
	next()
.listen 8080
