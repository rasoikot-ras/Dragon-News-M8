import Image from 'next/image';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';

const NewsCard = ({ news }) => {
  return (
  <div className="card w-auto p-5">
    <div className="">

      {/* Author info */}
      <div className='bg-[#F3F3F3] w-auto rounded-t-xl flex justify-between items-center '>
        <div className='flex gap-3 items-center p-4 '>
            <Image 
             src={news.author?.img} 
             alt={news.author?.img} 
             height={40} 
             width={40} 
             className="rounded-full"
            />
            <div className=''>
              <p className='font-bold'>{news.author?.name}</p>
              <p className="text-[#706F6F] text-xs">{news.author?.published_date}</p>
            </div>
          {/* <Image src={news.author?.img}  */}
        </div>
        <div className="flex gap-3 mr-5">
              <CiShare2 className="text-xl"/>
              <CiBookmark className="text-xl"/>
        </div>
      </div>

      <h2 className="card-title text-[#403F3F] text-xl p-5">{news.title}</h2>
    </div>
    <figure>
          <Image
            src={news.image_url}
            alt={news.title}
            height={262} 
            width={518}
            className='w-full p-5'
          />
    </figure>
  </div>
  );
};

export default NewsCard;