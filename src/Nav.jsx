import { Link } from "react-router-dom"

const Nav = ({search, setSearch}) => {
  return (
    <nav className="bg-white p-3 px-9 flex items-center justify-between">
        <form action="" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search" className="absolute invisible">Search Posts</label>
            <input 
                id='search'
                type="text" 
                placeholder="search for posts"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="p-1 border-b border-black focus:outline-none"
            />
        </form>
        <ul className="flex">
            <li className="mr-4"><Link to={"../"}>Home</Link></li>
            <li className="mr-4"><Link to={"../post"}>Post</Link></li>
            <li className="mr-4"><Link to={"../about"}>About</Link></li>
        </ul>
    </nav>
  )
}

export default Nav