import { Meteor } from 'meteor/meteor';
import {WebApp} from 'meteor/webapp';  // middleware
import '../imports/api/users';
import {Links} from '../imports/api/links';
import '../imports/startup/simple-schema-configuration';


Meteor.startup(() => {
  WebApp.connectHandlers.use((req, res, next) =>{
    const _id = req.url.slice(1); // start from 1st(2) char
    const link = Links.findOne({_id}); // one get 1 result
    if(link){
      res.statusCode = 302;
      res.setHeader('Location', link.url);
      res.end();
      Meteor.call('links.trackVisit', _id);
    } else{
      next();
    };
  });
});
