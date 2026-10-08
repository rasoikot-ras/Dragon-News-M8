import Image from 'next/image';
import React from 'react';

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <div className="card-body">

    {/* Author info */}
    <div>
      <div className='flex gap-3 items-center'>
          <Image 
           src={news.author?.img} 
           alt={news.author?.img} 
           height={40} 
           width={40} 
           className="rounded-full"
          />
          <div>
            <p className='font-bold'>{news.author?.name}</p>
            <p className='text-[#706F6F]'>{news.author?.published_date}</p>
          </div>
          {/* <Image src={news.author?.img}  */}
      </div>
      <div>

      </div>
    </div>

    <h2 className="card-title">{news.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
  </div>
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
</div>
  );
};

export default NewsCard;