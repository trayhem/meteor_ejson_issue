import {Meteor} from 'meteor/meteor';
import {EJSON} from 'meteor/ejson';
import {Template} from 'meteor/templating';
import {testCol} from '../shared/collection.js';

import './main.html';

Template.test.events({
  "click #insertButton": function () {
	  Meteor.call("insertAType", new A("testParam"), function (err, res) {
		  console.log("Result of method call (error, result): ", err, res);
	  });
  }
});

Template.test.helpers({
	mongoContent: function () {
		return testCol.find();
	},
	getStringValueOf: function (object) {
		return JSON.stringify(object);
	}
});

class A {
  constructor (param) {
    this.param = param;
  }

  equals (instance) {
    return instance.param === this.param;
  }

  static typeName () {
    return this.constructor.name;
  }

  toJSONValue () {
    return {
      param: this.param
    }
  }

  clone () {
    return new A(this.param);
  }
}

EJSON.addType("A", function fromJSONValue(value) {
  return new A(value);
});
