import { useState } from "react";
import Header from "../components/Header";
import CategoryList from "./CategoryList";

export default function Index(){
    const [categories,setCategories] = useState([
        {id:1,title: 'Solar Energy',img:'/advert4.jpg'},
        {id:2,title: 'Wind Mills',img:'/advert5.jpg'},
        {id:3,title: 'Hydro-electric Plants',img:'/advert6.jpg'},
        {id:4,title: 'Nuclear Energy',img:'/advert7.jpg'},
        {id:5,title: 'Solar Energy',img:'/advert8.jpg'}

    ]);

    return(
        <>
            <Header/>
            <section className="px-10 sm:px-14 md:px-20 py-10 bg-gray-100 h-auto flex
             justify-center gap-4 flex-wrap">
                {
                    categories && categories.map((cat,i)=>{
                        return <CategoryList key={i} title={cat.title} id={cat.id} img={cat.img}/>
                    })
                }
            </section>
        </>
    )
}