import { Link } from "react-router-dom";
import sanityClient from '../sanityServer';
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

export default function Header({pageParams,type,title}){
    const [links,setLinks] = useState([]);

    useEffect(()=>{
        sanityClient.fetch(`*[_type == "link"] | order(_id desc){
            _id,
            name,
            slug,
        }`)
        .then(res=>{
            console.log('data: ',res);
            setLinks(res);
        }).catch(err=>{
            Swal(
                'Error Occured',
                err.message,
                'error'
            )
        });
    },[]);
    
    return(
        <header className="flex justify-between bg-indigo-700 text-white px-5 sm:px-14 md:px-20 py-7">
            <div>
                <Link to='/' className="text-2xl sm:text-3xl font-bold">SanBlog</Link>
                <p className="text-xs font-normal mt-1">
                    {type && type === 'category' ? 
                    type && <Link to={`/category/${pageParams}`}>{type + ' > ' + title}</Link> :
                    type && <Link to={`/post/${pageParams}`}>{type + ' > ' + title}</Link>}
                </p>  
            </div>

            <div className="flex items-center gap-4">
                <Link to='/posts' className="underline text-sm sm:text-base hover:text-blue-500">All Posts</Link>
                {
                    links.map((link,i)=>{
                        return  <Link key={i} to={`/link/${link.slug.current}`} className="underline text-sm sm:text-base hover:text-blue-500">{link.name}</Link>
                    })
                }
            </div>
        </header>
    )
}