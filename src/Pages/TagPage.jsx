import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Blogs from "../components/Blogs";

const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header />
      <div className='flex flex-row ml-[285px]  mt-[100px] gap-4'>
        <button onClick={() => navigation(-1)} className='border-gray-100 bg-slate-200 px-[10px] rounded-[6px] font-semibold'>Back</button>
        <h2 className='font-bold'>
          Blogs Tagged <span className="text-blue-700 px-1">#{tag}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default TagPage;
