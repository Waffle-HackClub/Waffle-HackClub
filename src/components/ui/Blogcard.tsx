import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  author: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  linkUrl: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  author,
  title,
  description,
  date,
  imageUrl,
  linkUrl,
}) => {
  return (
    <Link href={linkUrl} passHref>
      <div className="flex flex-col sm:flex-row items-start p-6 border-b border-gray-200 bg-black  ">
        <div className="mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
          <Image
            src={imageUrl}
            alt={title}
            className="rounded-lg"
            width={200}
            height={200}
            layout="fixed"
          />
        </div>
        <div className="flex-1 text-white">
          <div className="flex items-center mb-2">
            <span className="text-sm font-medium text-slate-200">{author}</span>
          </div>
          <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
          <p className="text-slate-200 mb-4">{description}</p>
          <div className="flex items-center text-sm text-slate-200">
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
