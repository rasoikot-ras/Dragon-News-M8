import LeftSideBar from '@/Components/homepage/news/LeftSideBar';
import NewsCard from '@/Components/homepage/news/NewsCard';
import RighSideBar from '@/Components/homepage/news/RighSideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';



const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;

    const categories = await getCategories();

    const news = await getNewsByCategoryId(id);

    return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-20">

  <div className="bg  col-span-3">

    <LeftSideBar categories={categories} activeId={id} />

  </div>

  <div className="col-span-6">
    <h2 className='font-semibold text-xl text-[#403F3F]'>All News</h2>
      <div className="space-y-4">
          {
        news.length > 0?
         news.map((n) => {
            return (
            <NewsCard key={n._id} news={n}>
              </NewsCard>
            );
          }) : <h2 className='font-bold text-4xl text-red-950 text-center align-middle mt-36'>No News Found</h2> }
      </div>
  </div>

  <div className="col-span-3">
    <RighSideBar />
  </div>



  </div>
  );
};

export default NewsCategoryPage;