import { useEffect, useState } from "react";
import PostList from "../components/PostList";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import sanityClient from '../sanityServer';
import Swal from "sweetalert2";

export default function Category(){
    const {slug} = useParams();
    const [category,setCategory] = useState(null);
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        sanityClient.fetch(`*[_type == "category" && slug.current == "${slug}"]{
            _id,
            title,
            image
        }[0]`).then(res=>{
            console.log('data2: ',res);
            setCategory(res);
        }).catch(err=>{
            Swal(
                'Error Occured',
                err.message,
                'error'
            )
        });

        sanityClient.fetch(`*[_type == "post" && references(*[_type == "category" && slug.current == "${slug}"]._id)]{
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
            console.log('err: ',err);
        });
    },[slug]);

    return(
        <>
            <Header type='category' title={category&&category.title} pageParams={slug}/>
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