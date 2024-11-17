import React from 'react'

const NewPost = ({handleSubmit, postTitle, setPostTitle, postBody, setPostBody}) => {
  return (
    <main className='m-4 flex-1 bg-white p-6 shadow-md rounded-xl'>
        <h2 className='font-bold mb-3'>NewPost</h2>
        <form action="" onSubmit={handleSubmit} className=''>
            <label htmlFor="postTitle">Title:</label>
            <input 
                id='postTitle'
                type="text"
                required
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                className='w-full border-b border-black p-2 focus:outline-none'
            />
            <label htmlFor="postBody">Post:</label>
            <textarea 
              required 
              id="postBody" 
              rows={6}
              value={postBody} 
              onChange={(e) => setPostBody(e.target.value)} 
              className='w-full border-b border-black focus:outline-none p-2'
            />
                <button type='submit' className='w-full my-3 bg-sky-600 rounded-3xl text-white shadow-md'>Submit</button>
        </form>
    </main>
  )
}

export default NewPost