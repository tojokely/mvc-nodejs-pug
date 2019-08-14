const authorsHelper = require('../helpers/authors');
const model = require('./model');

module.exports = function(req,res){
	var authorId = req.params.authorId;
	var author = authorsHelper.getAuthorById(authorId);

	res.render('authors-detail/view', model(author));
}