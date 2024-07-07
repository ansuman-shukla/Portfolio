import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';

const Socials = () => {
  return (
    <div className='header__socials'>
       <a href="https://www.linkedin.com/in/ansuman-shukla-90b89222b/" target='_blank'><BsLinkedin/></a>
       <a href="https://github.com/ansuman-shukla" target='_blank'><BsGithub/></a>
    </div>
  );
}

export default Socials;