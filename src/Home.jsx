import React from 'react'
import Feed from './Feed'

const Home = ({posts, firstPostId}) => {
  return (
    <main className='flex-1'>
        {posts.length ? (
            <Feed posts={posts} firstPostId={firstPostId}/>
        ) : (
            <p>No posts to display</p>
        )}
    </main>
  )
}

export default Home