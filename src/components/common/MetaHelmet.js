import React from 'react';
import { Helmet } from 'react-helmet';

const defaultDesc = `I am a Web Development Specialist. I love building beautiful user experiences with JavaScript, React & Node.`;

const MetaHelmet = ({
  description = defaultDesc,
  url = 'https://biswa.co',
  title = `Biswa's Portfolio`,
  image = 'https://biswa.co/images/home-office.jpg',
  domain = 'biswa.co'
}) => {
  return (
    <Helmet>
      <meta name="description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={domain} />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default MetaHelmet;
