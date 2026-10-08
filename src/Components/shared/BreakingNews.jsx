import React from 'react';
import Marquee from 'react-fast-marquee';


const news = [
    {
        _id: "1",
        title: "Breaking News: RA SOIKOT IS A WEB DEVELOPER (MERN)",
    },
    {
        _id: "2",
        title: "Breaking News: RA SOIKOT NEW POLICY ANNOUNCED BY THE GOVERMENT",
    },
    {
        _id: "3",
        title: "Breaking News: RA SOIKOT SPORTS TEAM WINS CHAMPIONSHIP",
    },
    {
        _id: "4",
        title: "Breaking News: HE IS A PROFESSIONAL DEVELOPER REACTJS, NEXTJS",
    },


];

const BreakingNews = () => {
  return (
    <div className='flex justify-between gap-4 items-center bg-gray-200 py-4 px-3 container mx-auto'>
        <button className='latest bg-[#D72050] py-2.5 px-6 text-white'>
                Latest
            </button>
        <Marquee pauseOnHover={true} speed={50}>
            {news.map(n=> {
               return <span key={n._id}>
                {n.title}
            </span>
            })

            }
            
        </Marquee>

    </div>
  )
}

export default BreakingNews