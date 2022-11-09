import React from 'react';

export const Contact = ({ contact }) => {
    return <li>{contact.name} - {contact.whatsapp} - {contact.email} - {contact.subject}</li>
};