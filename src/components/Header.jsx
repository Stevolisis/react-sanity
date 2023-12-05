import { Link } from "react-router-dom";


export default function Header({type,title}){

    return(
        <header className="flex justify-between bg-indigo-700 text-white px-20 py-7">
            <h1 className="text-3xl font-bold">SanBlog</h1>

            <div className="flex items-center gap-4">
                <Link href='/posts' className="hover:text-blue-500">All Posts</Link>
                <Link href='/contact_us' className="hover:text-blue-500">Contact us</Link>
            </div>
        </header>
    )
}