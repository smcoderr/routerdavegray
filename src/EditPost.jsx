import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"

const EditPost = ({
    posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle
}) => {
    const {id} = useParams();
    const post = posts.find( post => (post.id).toString() === id)

    useEffect(() => {
        if (post) {
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    }, [post, setEditTitle, setEditBody])
  return (
    <main className='m-4 flex-1 bg-white p-6 shadow-md rounded-xl'>
        {editTitle &&
            <>
                <h2 className='font-bold mb-3'>Edit Post</h2>
                <form action="" onSubmit={(e) => e.preventDefault()} className=''>
                    <label htmlFor="postTitle">Title:</label>
                    <input 
                        id='postTitle'
                        type="text"
                        required
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className='w-full border-b border-black p-2 focus:outline-none'
                    />
                    <label htmlFor="postBody">Post:</label>
                    <textarea 
                    required 
                    id="postBody" 
                    rows={6}
                    value={editBody} 
                    onChange={(e) => setEditBody(e.target.value)} 
                    className='w-full border-b border-black focus:outline-none p-2'
                    />
                        <button type='submit' onClick={() => handleEdit(post.id)} className='w-full my-3 bg-sky-600 rounded-3xl text-white shadow-md'>Submit</button>
                </form>
            </>
        }
        {!editTitle && 
            <>
                <h2>Post Not Found</h2>
                <p>Well, that's disappointing</p>
                <p>
                    <Link to={'/'}>Visit Our HomePage</Link>
                </p>
            </>
        }
    </main>
  )
}

export default EditPost