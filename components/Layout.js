import React from 'react';
import Nav from './Nav';
import Link from 'next/link';

export default function Layout({ children }) {

    return(
        <div>
        <Nav className='px-5 rounded-md'>
          <a href="/featured">Featured</a>
          <a href="/popular">Popular</a>
          <a href="/recent">Recent</a>
        </Nav>
      {children}
    </div>

    )
}