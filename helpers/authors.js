module.exports = {

	getAllAuthors: function() {
		return  {
			'ryan': {
				name: 'Ryan Hello',
				books: ['Digiboy', 'Saleko']
			},

			'henro': {
				name: 'Henro Naval',
				books: ["Make it soothing", 'Arrival']
			}
		}		
	},


 	getAuthorById: function(id) {
		var authors = this.getAllAuthors();

		var author = authors[id];
		if (author === undefined) {
			return 'Not Found'
		} else {
			return author;
		}
	}
}