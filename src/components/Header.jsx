import { Link } from "react-router-dom";


export default function Header({type,title}){

    return(
        <header className="flex justify-between bg-indigo-700 text-white px-10 sm:px-14 md:px-20 py-7">
            <h1 className="text-2xl sm:text-3xl font-bold">SanBlog</h1>

            <div className="flex items-center gap-4">
                <Link href='/posts' className="text-sm sm:text-base hover:text-blue-500">All Posts</Link>
                <Link href='/contact_us' className="text-sm sm:text-base hover:text-blue-500">Contact us</Link>
            </div>
        </header>
    )
}