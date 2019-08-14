const express = require('express'),
	app = express(),
	pug = require('pug');
	
const homepage = require('./homepage'),
	authorsLanding = require('./authors-landing'),
	authorsDetail = require('./authors-detail');

app.set('views', '.')

app.set('view engine', 'pug')

app.get('/', homepage.controller)

app.get('/authors', authorsLanding.controller);

app.get('/authors/:authorId', authorsDetail.controller);

app.listen(3000, function(){
	console.log('Web app ready at port 3000;')
})