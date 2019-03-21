import {Meteor} from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';


// handle all the invalid schema situation in this function!
SimpleSchema.defineValidationErrorTransform((error) => {
  return new Meteor.Error(400, error.message);
});
