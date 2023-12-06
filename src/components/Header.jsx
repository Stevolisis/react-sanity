import { Link } from "react-router-dom";


export default function Header({type,title}){

    return(
        <header className="flex justify-between bg-indigo-700 text-white px-5 sm:px-14 md:px-20 py-7">
            <Link to='/' className="text-2xl sm:text-3xl font-bold">SanBlog 
                <span className="text-xs font-normal">
                    {type && ' > ' + type + ' > ' + title}
                </span>  
            </Link>

            <div className="flex items-center gap-4">
                <Link to='/posts' className="underline text-sm sm:text-base hover:text-blue-500">All Posts</Link>
                <Link to='/about_us' className="underline text-sm sm:text-base hover:text-blue-500">Contact us</Link>
            </div>
        </header>
    )
}