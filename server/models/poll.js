var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
	question: {
		type: String,
		minlength: 3,
		required: true
	},
	option1: {
		name: String,
		count: {
			type: Number,
			default: 0
		}
	},
	option2: {
		name: String,
		count: {
			type: Number,
			default: 0
		}
	},
	option3: {
		name: String,
		count: {
			type: Number,
			default: 0
		}
	},
	option4: {
		name: String,
		count: {
			type: Number,
			default: 0
		}
	},
		_user: {
		type: String		
	}
	// _user: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'User'		
	// }		
},{timestamps: true});

mongoose.model('Poll',PollSchema);