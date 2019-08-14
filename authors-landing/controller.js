const authorsHelper = require('../helpers/authors');
const model = require('./model')

module.exports = function(req,res){
	var authors = authorsHelper.getAllAuthors();

	res.render('authors-landing/view', model(
		'Authors',
		'Here are the authors',
		authors
		));
}