
import {Mongo} from 'meteor/mongo';

testCollection = new Mongo.Collection("testCollection");

export const testCol = testCollection;