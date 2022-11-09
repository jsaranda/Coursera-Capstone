import React from 'react';
import { Contact } from './Contact.jsx';

const contacts = [

  {_id:1, name:'Fulano da silva', whatsapp:'999587412', email:'something@gmail.com', subject:'loan for a new house'},
  {_id:2, name:'Fulana da silva', whatsapp:'999587413', email:'something123@gmail.com', subject:'loan for a new house'},
  {_id:3, name:'ciclano da silva', whatsapp:'999545412', email:'something456@gmail.com', subject:'rent a house'},
];

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    
    <ul>
      {contacts.map(contact => <Contact key={ contact._id } contact={ contact }/>)}
    </ul>

  </div>
);
