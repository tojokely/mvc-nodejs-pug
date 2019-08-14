module.exports = function(title, subtitle, authors) {
	return {
			title: title || 'Authors',
			subtitle: subtitle || 'Here are the authors',
			authors: authors || []
	}
}