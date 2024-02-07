import { useState } from "react";
import BlogList from "./BlogList";
import './test.scss';

const Test = () => {

    const[blogs, setBlogs] = useState([
        {title: 'Test-1', body: 'lorem-10', author:'Mario', id: 1},
        {title: 'Test-2', body: 'lorem-20', author:'luigi', id: 2},
        {title: 'Test-3', body: 'lorem-30', author:'Yoshi', id: 3},
        {title: 'Test-4', body: 'lorem-40', author:'Toad', id: 4}
    ]);


    const handleDelete = (key) => {
        const newBlogs = blogs.filter(blog => blog.id !== key);
        setBlogs(newBlogs);
    }


    return ( 
        <div className="Test">
           <BlogList blogs={blogs} title="Blogs" handleDelete={handleDelete}/>
          
        </div>
     );
}
 
export default Test;    