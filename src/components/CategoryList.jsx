import { Link } from "react-router-dom";


export default function CategoryList({id,img,title}){

    return(
        <Link to={`/category/${id}`} className=" ">
            <div>
                <img src={img} alt={title} className=" object-cover min-w-[300px] w-[300px] min-h-[180px] h-[180px]"/>
            </div>

            <div className="bg-indigo-100 p-6">
                <h3 className=" text-gray-700 text-sm">{title}</h3>
            </div>
        </Link>
    )
}