import {testCol} from '../shared/collection.js';

testCol.find().observe({
	added: function (doc) {
		console.log("Doc added in MongoDB: ", doc);
	},
	changed: function (doc) {
		console.log("Doc changed in MongoDB: ", doc);
	}
});