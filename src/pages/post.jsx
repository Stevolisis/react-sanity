import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import sanityClient from '../sanityServer';
import BlockContent from '@sanity/block-content-to-react';

export default function Post(){
    const { slug } = useParams();
    const [post,setPost] = useState(null);

    useEffect(()=>{
        sanityClient.fetch(`*[_type == "post" && slug.current == "${slug}"]{
            _id,
            title,
            slug,
            "author":author->name,
            description,
            "imageUrl": image.asset->url, 
            "imageAlt": image.alt,
            content,
            publishedAt
        }[0]`).then(res=>{
            console.log('data2: ',res);
            setPost(res);
        }).catch(err=>{
            Swal(
                'Error Occured',
                err.message,
                'error'
            )
        });

    },[slug]);

    return(
        <>
            <Header type='post' title={post && post.title} pageParams={slug}/>
            { !post ? <p className="text-gray-400 text-2xl text-center">...loading</p> :       
                <section className="px-7 sm:px-14 md:px-20">
                    <div className="py-12">
                        <h2 className=" font-bold text-4xl text-indigo-950">{post.title}</h2>
                        <p className="text-gray-800 text-sm pt-2">by {post.author}</p>
                        <p className="text-gray-600 text-xs"> {new Date(post.publishedAt).toLocaleString()}</p>
                    </div>
                    <div>
                        <img src={post.imageUrl} alt={post.title}
                            className="w-full h-[400px] object-cover"
                        />
                    </div>
                    <div className="py-7">
                        <p>
                            <BlockContent blocks={post.content} projectId='xziq8i10'/>
                            {/* {post.content} */}
                        </p>
                    </div>
                </section>
            }
        </>
    )
}