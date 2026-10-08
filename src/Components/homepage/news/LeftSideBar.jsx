import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({categories, activeId}) => {
  return (
    <div>
        <h2 className="font-semibold text-xl text-[#403F3F]">
            All Category
        </h2>
        <ul className="flex flex-col gap-3 mt-6">
            {
                categories.news_category.map(category => {
                    return<li key={category.category_id} className={`
                        ${activeId === category.category_id && "bg-[#E7E7E7] text-[#403F3F]"}
                    text-[#9F9F9F] text-left p-2 rounded-md font-medium text-xl
                    `}>
                        <Link href={`/category/${category.category_id}`} className='block'>
                            {" "}
                            {category.category_name}
                        </Link>

                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default LeftSideBar;