import React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Typography } from '@mui/material';
import './ContactsPage.scss';
import { Link } from 'react-router-dom';

interface Contact {
  photo: string;
  name: string;
  linkedIn: string;
}

export const ContactsPage: React.FC = () => {
  const contacts: Contact[] = [
    {
      photo: 'https://avatars.githubusercontent.com/u/80041896?v=4',
      name: 'Oleksii Lysenko',
      linkedIn: 'https://www.linkedin.com/in/oleksii-lysenko-975402214/'
    },
    {
      photo: 'https://avatars.githubusercontent.com/u/121095730?v=4',
      name: 'Kateryna Sokur',
      linkedIn: 'https://www.linkedin.com/in/kateryna-sokur-696862170/'
    },
    {
      photo: 'https://avatars.githubusercontent.com/u/127235037?v=4',
      name: 'Viktor Panchenko',
      linkedIn: 'https://www.linkedin.com/in/panch1811/'
    },
    {
      photo: 'https://avatars.githubusercontent.com/u/130697313?v=4',
      name: 'Maryan Mats',
      linkedIn: 'https://www.linkedin.com/in/maryan-mats/'
    },
    {
      photo: 'https://avatars.githubusercontent.com/u/129941245?v=4',
      name: 'Mykola Maik',
      linkedIn: 'https://www.linkedin.com/in/maik-mykola-983b90282/'
    }
    // {
    //   photo: 'https://avatars.githubusercontent.com/u/127655844?v=4',
    //   name: 'Kateryna Zaremska',
    //   linkedIn: 'xd'
    // }
  ];

  return (
    <>
      <Breadcrumbs>
        <Typography>Contacts</Typography>
      </Breadcrumbs>

      <div className="text">
        <h2 className="heading-text">
          The project was worked on by the top Developers.
        </h2>
        <h2 className="subheading-text">
          Inform you that each of us is in search of employment!
        </h2>
        <p>
          Our team consists of creative and self motivated full-stack developers
          who have created this service. You can contact any of us using links
          below. We are opened to any offers!
        </p>
      </div>
      <div className="contactsContainer">
        {contacts.map((contact) => (
          <>
            <article className="contactBox">
              <h2 className="contactBox_name">{contact.name}</h2>
              <img src={contact.photo} alt={`${contact.name} Photo`} />
              <Link to={contact.linkedIn}>
                <button className="button" type="button" role="button">
                  LINKEDIN
                </button>
              </Link>
            </article>
          </>
        ))}
      </div>
    </>
  );
};
