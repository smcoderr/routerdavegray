import React from 'react'
import Post from './Post'

const Feed = ({posts, firstPostId}) => { 
      
  return (
    <>
        {posts.map(post => (
            <Post key={post.id} post={post} firstPostId={firstPostId}/>
        ))}
    </>
  )
}

export default Feed