import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import {Tracker} from 'meteor/tracker';
import {Session} from 'meteor/session';

import {routes, onAuthChange} from '../imports/routes/routes';
import '../imports/startup/simple-schema-configuration';

import {Links} from '../imports/api/links'

Tracker.autorun(() =>{
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

// stateless functional component : faster, easy read
// import React from 'react';
// const MyComponent = (props) =>{
//   // default render
//   return (
//     <div>
//       <h1>mycpodsfsad {props.name}</h1>
//     </div>
//   );
// };

Meteor.startup(() => {
  Session.set('showVisible', true)
  ReactDOM.render(routes, document.getElementById('app'));
});
