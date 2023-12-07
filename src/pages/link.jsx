import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import SanityBlockContent from "@sanity/block-content-to-react";
import Swal from "sweetalert2";
import sanityClient from '../sanityServer';

export default function Link(){
    const {slug} = useParams();
    const [data,setData] = useState(null);

    useEffect(()=>{
        sanityClient.fetch(`*[_type == "link" && slug.current == "${slug}"]{
            _id,
            name,
            slug,
            content,
        }[0]`).then(res=>{
            console.log('data2: ',res);
            setData(res);
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
            <Header/>
            {data && <section className="px-7 sm:px-14 md:px-20 py-7 sm:py-12">
                <h2 className="text-2xl sm:text-3xl font-semibold pb-3">{data.name}</h2>
                <p>
                    <SanityBlockContent blocks={data.content} projectId='xziq8i10'/>
                </p>
            </section>}
        </>
    )
}