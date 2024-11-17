import React from 'react'
import { useParams, Link } from 'react-router-dom'

const PostPage = ({posts, handleDlete}) => {
    const {id} = useParams();
    const post = posts.find(post => (post.id).toString() === id);
  return (
    <main className='flex-1 px-8 py-4'>
        <article className='bg-white p-5'>
            {post && 
                <>
                    <h2 className='font-medium'>{post.title}</h2>
                    <p className='text-slate-500 text-xs'>{post.datetime}</p>
                    <p className='mb-4 mt-2'>{post.body}</p>
                    <Link to={`/edit/${post.id}`}><button className='bg-sky-400 hover:bg-sky-500 border border-sky-700 py-1 px-3  mr-2'>Edit post</button></Link>
                    <button onClick={() => handleDlete(id)} 
                        className='bg-red-500 hover:bg-red-600 border border-red-700 py-1 px-3 mr-2 transition ease-in-out duration-300 '>Delete Post</button>
                </>
            }
            {!post &&
                <>
                    <h2>Post Not found</h2>
                    <p>Well, that's disappointing</p>
                    <p>
                        <Link to={'/'}>Visit Our Homepage</Link>
                    </p>
                </>
            }
        </article>
    </main>
  )
}

export default PostPage