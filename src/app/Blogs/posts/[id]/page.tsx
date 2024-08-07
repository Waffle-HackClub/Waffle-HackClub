import blogs from '@/data/blogs.json';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogPost = ({ params }: { params: { id: string } }) => {
  const blog = blogs.find((blog) => blog.id === Number(params.id));
  if (!blog) {
    return <div className="container mx-auto py-12 md:px-0 max-w-7xl">Blog not found</div>;
  }

  let currentParaIndex = 0;

  return (
    <div className="container mx-auto py-12 px-5 max-w-7xl">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500">
          {blog.title}
        </h1>
        <p className="text-sm text-gray-500">{blog.author} - {blog.date}</p>
        <p className="text-lg italic text-gray-500">{blog.blogquote}</p>
      </div>

      <div className="gap-8">
        <div className="max-w-full flex justify-center align-center mb-5 overflow-hidden rounded-xl">
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            width={700}
            height={700}
            className="rounded-xl"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="prose dark:prose-dark">
          <p className="font-light">{blog.paras?.at(currentParaIndex)}</p>
          {blog.headings?.slice(1).map((heading, headingIndex) => {
            currentParaIndex += blog.countPara[headingIndex]; // Move to the next set of paragraphs
            return (
              <React.Fragment key={headingIndex}>
                {heading && <h2 className="text-xl font-bold mt-6">{heading}</h2>}
                {Array.from({ length: blog.countPara[headingIndex + 1] }).map((_, paraIndex) => (
                  <p key={paraIndex}>{blog.paras[currentParaIndex + paraIndex]}</p>
                ))}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="mt-8 text-center">
        <button className="px-4 py-2 rounded-xl bg-white dark:bg-gray-800 text-black dark:text-white text-lg font-bold">
          <Link href="/Blogs">Back to Blogs</Link>
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
