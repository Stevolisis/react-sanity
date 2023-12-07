import { useEffect, useState } from "react";
import PostList from "../components/PostList";
import Header from "../components/Header";
import sanityClient from '../sanityServer';
import Swal from "sweetalert2";

export default function Posts(){
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        sanityClient.fetch(`*[_type == "post"]{
            _id,
            title,
            slug,
            "author":author->name,
            description,
            "imageUrl": image.asset->url, 
            "imageAlt": image.alt,
        }`)
        .then(res=>{
            console.log('data: ',res);
            setPosts(res);
        }).catch(err=>{
            Swal(
                'Error Occured',
                err.message,
                'error'
            )
        });
    },[]);

    return(
        <>
            <Header/>
            <section className="px-10 sm:px-14 md:px-20 py-10 h-auto flex
             justify-center gap-4 flex-wrap">
                {
                    posts.length===0 ? 
                        <p className="text-gray-400 text-2xl">...loading</p> : 
                    posts.map((post,i)=>{
                        return <PostList key={i} id={post._id} author={post.author} slug={post.slug.current} description={post.description} title={post.title} img={post.imageUrl} imageAlt={post.imageAlt}/>
                    })
                }
            </section>
        </>
    )
}