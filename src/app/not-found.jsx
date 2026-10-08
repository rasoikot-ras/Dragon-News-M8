import Link from 'next/link';
import React from 'react';

const Notfound = () => {
  return (
    <div className='h-[80vh] flex justify-center items-center flex-col'>
        <h2 className='font-bold text-5xl text-purple-500 pb-3.5'>This page is not found</h2>

        <Link href={'/'}>
            <button className='btn bg-amber-600 text-white space-y-2 rounded-2xl hover:bg-sky-700'>Back to Home</button>
        </Link>
    </div>
  )
}

export default Notfound;