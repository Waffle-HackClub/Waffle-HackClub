import React from 'react';
import BlogCard from '@/components/ui/Blogcard'; 
import blogsData from '@/data/blogs.json'; 
import Link from 'next/link'; 

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex align-left">
      <Link href="/#Home">
        <button className="px-7 py-2 mx-5 rounded-xl bg-white dark:bg-white dark:text-black text-black text-l font-bold" type="button">
          Back
        </button>
      </Link>
      </div>

      {blogsData.map(blog => (
        <div key={blog.id} className="mb-4" id={`blog-${blog.id}`}>
          <BlogCard
            author={blog.author}
            title={blog.title}
            description={blog.description}
            date={blog.date}
            imageUrl={blog.imageUrl}
            linkUrl={`/Blogs/posts/${blog.id}`}
          />
        </div>
      ))}

      
    </div>
  );
};

export default Home;
