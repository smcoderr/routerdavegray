import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import Home from "./Home";
import { format } from 'date-fns'
import api from './api/posts'
import EditPost from "./EditPost";

function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data)
      } catch (error) {
        if(error.response){
          //Not in the 200 response
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(`Error: ${error.message}`);
          
        }
      }
    }
    fetchPosts()
  },[])

  useEffect(() => {
    const filterResults = posts.filter(post => 
    ((post.body).toLowerCase()).includes(search.toLowerCase())
    || ((post.title).toLowerCase()).includes(search.toLowerCase()))

    setSearchResults(filterResults.reverse())
  }, [posts, search])
  const firstPostId = 1;
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id= posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id, title: postTitle, datetime, body: postBody};
    try {
      const response = await api.post('/posts/',newPost)
      const allPosts = [...posts, response.data];
      setPosts(allPosts)
      setPostTitle('');
      setPostBody('');
      navigate('/')
    } catch (error) {
      console.log(`Error: ${error.message}`);
      
    }
  }
  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updateedPost = {id, title: editTitle, datetime, body: editBody};
    try {
      const response = await api.put(`/posts/${id}`, updateedPost)
      setPosts(posts.map(post => post.id === id ? {...response.data} : post));
      setEditTitle('');
      setEditBody('');
      navigate('/');
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }

  const handleDlete = async (id) => {
    try {
      await api.delete(`/posts/${id}`)
      const postsLists = posts.filter(post => post.id !== id);
      setPosts(postsLists)
      navigate('/')
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }
  return (
    <div className="min-h-dvh flex flex-col bg-neutral-100">
      <Header />
      <Nav search={search} setSearch={setSearch}/>
      <Routes>
        <Route path="/" element={<Home posts={searchResults} firstPostId={firstPostId}/>}/>
        <Route 
          path="/post" 
          element={
            <NewPost 
              handleSubmit={handleSubmit} 
              postTitle={postTitle} 
              setPostTitle={setPostTitle} 
              postBody={postBody} 
              setPostBody={setPostBody} 
            />}
        />
        <Route 
          path="/edit/:id" 
          element={
            <EditPost
              posts={posts} 
              handleEdit={handleEdit} 
              editTitle={editTitle} 
              setEditTitle={setEditTitle} 
              editBody={editBody} 
              setEditBody={setEditBody} 
            />}
        />
        <Route path="/post/:id" element={<PostPage posts={posts} handleDlete={handleDlete} />}/>
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<Missing />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
