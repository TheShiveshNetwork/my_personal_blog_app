import React, { useState, useEffect } from 'react'

import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
    }
  }, [slug])

  // console.log(relatedPosts)

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <Link href={`/post/${post.slug}`} className='text-md transition duration-500 flex items-center w-full mb-4 border border-white hover:border-gray-200 p-3 rounded-lg hover:bg-gray-100' key={post.title}>
          <div className="w-16 h-[60px] flex-none">
            <img
              alt={post.title}
              className='h-full object-cover object-center rounded-full'
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className='text-gray-500 font-xs'>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <span href={`/post/${post.slug}`} className='text-md transition duration-200'>
              {post.title}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PostWidget