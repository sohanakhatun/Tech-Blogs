import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from './Pages/CategoryPage';
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css"
import { Route, useLocation, useSearchParams } from "react-router-dom";
import { Routes } from "react-router-dom";


export default function App() {
  
const {fetchBlogPosts} = useContext(AppContext);
const[searchParams,setSearchParams] = useSearchParams();

const location = useLocation();


// It is called when the pathname(any new tag or category is called) or search parameter(page no.) is changed or rendered.
  useEffect(() => {
 const page = searchParams.get("page") ?? 1 ;
 if (location.pathname.includes("tags")) {

  const tag = location.pathname.split("/").at(-1).replace("-"," ");
  fetchBlogPosts(Number(page),tag);

 }
 else if(location.pathname.includes("categories")){

const category = location.pathname.split("/").at(-1).replace("-"," ");
fetchBlogPosts(Number(page),null,category);

 }
 else{
  fetchBlogPosts(Number(page));
 }
  },[location.pathname,location.search]);



  return (
<div>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/blog/:blogId" element={<BlogPage/>}/>
    <Route path="/tags/:tag" element={<TagPage/>}/>
    <Route path="/categories/:category" element={<CategoryPage/>}/>
   </Routes>

   
</div>
 

   
   
  );

}
