import React from 'react';
import '../styles/components/Header.styl';

export default function Header({ children }) {
  return (
    // eslint-disable-next-line quotes
    <header className='Header'>
      <div className='Image-profile' alt='person' style={{ backgroundImage: 'url(\'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png\')' }} />
      <article className='Article'>
        <h1 className='Header-title'>Raul Pacheco</h1>
        <h2 className='Header-job-title'>Frontend Developer</h2>
        <div>
          {children}
        </div>
      </article>
    </header>
  );
}
