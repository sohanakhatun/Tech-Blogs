import React from 'react'
import Header from '../components/Header';
import { useLocation,useNavigate } from 'react-router-dom';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
const CategoryPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header/>
      <div >
      <div className='flex flex-row ml-[285px]  mt-[100px] gap-4'>
        <button onClick={() => navigation(-1)} className='border-gray-100 bg-slate-200 px-[10px] rounded-[6px] font-semibold' >Back</button>
        <h2 className='font-bold'>Blogs on <span className='text-indigo-400'>{category}</span></h2>
      </div>
      <Blogs/>
      <Pagination/>
      </div>
    </div>
  )
}

export default CategoryPage