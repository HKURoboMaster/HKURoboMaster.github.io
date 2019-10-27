import React from 'react';
import { Link } from '@material-ui/core';

const generateLinks = links =>
  links.map(link => {
    const rel = link.url.substring(0, 8) === 'https://' ? 'noreferrer' : '';
    return (
      <div key={link.name}>
        <Link
          href={link.url}
          target="_blank"
          rel={rel}
          color="inherit"
          variant="body2"
        >
          {link.name}
        </Link>
      </div>
    );
  });

export default generateLinks;
