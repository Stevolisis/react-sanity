import { Link } from "react-router-dom";


export default function Header({type,title}){

    return(
        <header className="flex justify-between bg-indigo-700 text-white px-5 sm:px-14 md:px-20 py-7">
            <div>
                <Link to='/' className="text-2xl sm:text-3xl font-bold">SanBlog</Link>
                <p className="text-xs font-normal mt-1">
                    {type && type === 'category' ? 
                    type && <Link to={`/category/${title}`}>{type + ' > ' + title}</Link> :
                    type && <Link to={`/post/${title}`}>{type + ' > ' + title}</Link>}
                </p>  
            </div>

            <div className="flex items-center gap-4">
                <Link to='/posts' className="underline text-sm sm:text-base hover:text-blue-500">All Posts</Link>
                <Link to='/about_us' className="underline text-sm sm:text-base hover:text-blue-500">About us</Link>
            </div>
        </header>
    )
}