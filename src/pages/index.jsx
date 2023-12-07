import { useEffect, useState } from "react";
import Header from "../components/Header";
import CategoryList from "../components/CategoryList";
import sanityClient from '../sanityServer';
import Swal from "sweetalert2";

export default function Index(){
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        sanityClient.fetch(`*[_type == "category"]{_id, title, slug, "imageUrl": image.asset->url, "imageAlt": image.alt}`).then(res=>{
            setCategories(res);
            console.log('data: ',res);
        }).catch(err=>{
            Swal(
                'Error Occured',
                err.message,
                'error'
            )
        })
    },[]);

    return(
        <>
            <Header/>
            <section className="px-10 sm:px-14 md:px-20 py-10 h-auto flex
             justify-center gap-4 flex-wrap">
                {
                    categories.length===0 ? 
                    <p className="text-gray-400 text-2xl">...loading</p> : 
                    categories.map((cat,i)=>{
                        return <CategoryList key={i} id={cat._id} title={cat.title} img={cat.imageUrl} slug={cat.slug.current} imageAlt={cat.imageAlt}/>
                    })
                }
            </section>
        </>
    )
}