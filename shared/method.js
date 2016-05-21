import {Meteor} from 'meteor/meteor';
import {testCol} from './collection.js';

Meteor.methods({
	"insertAType": function (instance) {
		console.log("In Meteor method, instance value is: ",instance);
		testCol.insert(instance);
		console.log("In Meteor method, collection.find().fetch() is: ",testCol.find().fetch());
	}
});