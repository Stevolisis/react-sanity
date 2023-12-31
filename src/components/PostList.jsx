import { Link } from "react-router-dom";


export default function PostList({id,slug,title,author,img,imageAlt,description}){

    return(
        <Link to={`/post/${slug}`}>
            <div className="bg-gray-200 min-w-[300px] w-[300px] min-h-[180px] h-[180px] rounded-tl-[5px] rounded-tr-[5px]">
                <img src={img} alt={title} className="rounded-tl-[5px] rounded-tr-[5px] object-cover min-w-[300px] w-[300px] min-h-[180px] h-[180px]"/>
            </div>

            <div className="bg-indigo-100 p-6 rounded-bl-[5px] rounded-br-[5px] min-w-[300px] w-[300px]">
                <h3 className="">{title}</h3>
                <p className="text-xs text-gray-500">by {author}</p>
                <p className="text-xs pt-3 line-clamp-5">
                    {description}
                </p>

                <div className="flex justify-end pt-2">
                    <p className="text-xs text-blue-600 underline">Read More</p>
                </div>
            </div>

        </Link>
    )
}