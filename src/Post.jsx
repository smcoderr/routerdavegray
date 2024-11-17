import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post, firstPostId}) => {
    console.log(firstPostId);
    console.log(post.id);
    
  return (
    <article className={` p-6 px-5 bg-white m-2 md:m-4 shadow-md`}>
        <Link to={`../post/${post.id}`}>
            <h2 className='font-medium'>{post.title}</h2>
            <p className='text-slate-500 text-xs'>{post.datetime}</p>
        </Link>
        <p className='py-2'>{
            (post.body).length <=25
            ? post.body
            :  `${(post.body).slice(0,225)}...`    
        }</p>
    </article>
  )
}

export default Post