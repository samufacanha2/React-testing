import React from 'react';
import Link from 'next/link';

export default function Nav({ children }) {
    return (
      <div className="py-5 px-8 bg-gray-700 text-white flex justify-between">
          

      <h1 className="text-2xl float-left text-justify font-semibold text-white"> <Link href='/'> WebsiteName </Link> </h1>
        <div className="flex space-x-10 float-right items-center">

          {children}

        </div>
      </div>
    )
  }
  