import React from 'react';
import Image from 'next/image';

const OurBlogs = () => {
  const blogPosts = [
    {
      title: "This Long-Awaited Technology May Finally Change the World",
      author: "Ali Tufan",
      date: "April 20, 2023",
      category: "News",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "This Long-Awaited Technology May Finally Change the World", 
      author: "Ali Tufan",
      date: "April 20, 2023",
      category: "News",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "This Long-Awaited Technology May Finally Change the World",
      author: "Ali Tufan", 
      date: "April 20, 2023",
      category: "News",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold mb-12 text-center">Latest Blog Posts</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden relative">
            <div className="relative h-64 w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
              />
              <span className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full text-sm text-blue-600 font-semibold shadow-sm">
                {post.category}
              </span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mt-2 mb-4">{post.title}</h2>
              <div className="flex items-center text-gray-600">
                <span className="mr-4">{post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBlogs;
