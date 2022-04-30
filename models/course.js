const { Schema, model } = require('mongoose')

const course = new Schema({
	// id adding automatically
	title: { type: String, required: true },
	price: { type: Number, required: true },
	img: String,
	userId: { type: Schema.Types.ObjectId, ref: 'User' },
})

module.exports = model('Course', course)
