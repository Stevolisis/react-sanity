import { useState } from "react";
import PostList from "../components/PostList";
import Header from "../components/Header";


export default function Category(){
    const [posts,setPosts] = useState([
        {id:1,title: 'Solar Energy',author:'James Bond',img:'/advert4.jpg'},
        {id:2,title: 'Wind Mills',author:'Bandana Rock',img:'/advert5.jpg'},
        {id:3,title: 'Hydro-electric Plants',author:'Ruth Meggie',img:'/advert6.jpg'},
        {id:4,title: 'Nuclear Energy',author:'Smith Mooger',img:'/advert7.jpg'},
        {id:5,title: 'Solar Energy',author:'Steve Rockie',img:'/advert8.jpg'}

    ]);
    return(
        <>
            <Header type='category' title='Energy'/>
            <section className="px-10 sm:px-14 md:px-20 py-10 bg-gray-100 h-auto flex
             justify-center gap-4 flex-wrap">
                {
                    posts && posts.map((post,i)=>{
                        return <PostList key={i} author={post.author} title={post.title} id={post.id} img={post.img}/>
                    })
                }
            </section>
        </>
    )
}