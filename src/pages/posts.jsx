import { useState } from "react";
import PostList from "../components/PostList";
import Header from "../components/Header";


export default function Posts(){
    const [posts,setPosts] = useState([
        {id:1,title: 'Solar Energy',author:'James Bond',description:'Welcome to a world where luxury meets comfort, and sophistication intertwines with tranquility. In the heart of Abuja, we present the epitome of exquisite living – the best homes crafted for those who seek the extraordinary.', img:'/advert2.jpg'},
        {id:2,title: 'Wind Mills',author:'Bandana Rock',description:'Welcome to a world where luxury meets comfort, and sophistication intertwines with tranquility. In the heart of Abuja, we present the epitome of exquisite living – the best homes crafted for those who seek the extraordinary.', img:'/advert3.jpg'},
        {id:3,title: 'Hydro-electric Plants',author:'Ruth Meggie',description:'Welcome to a world where luxury meets comfort, and sophistication intertwines with tranquility. In the heart of Abuja, we present the epitome of exquisite living – the best homes crafted for those who seek the extraordinary.', img:'/advert4.jpg'},
        {id:4,title: 'Nuclear Energy',author:'Smith Mooger',description:'Welcome to a world where luxury meets comfort, and sophistication intertwines with tranquility. In the heart of Abuja, we present the epitome of exquisite living – the best homes crafted for those who seek the extraordinary.', img:'/advert5.jpg'},
        {id:5,title: 'Solar Energy',author:'Steve Rockie',description:'Welcome to a world where luxury meets comfort, and sophistication intertwines with tranquility. In the heart of Abuja, we present the epitome of exquisite living – the best homes crafted for those who seek the extraordinary.', img:'/advert1.jpg'}

    ]);
    return(
        <>
            <Header/>
            <section className="px-10 sm:px-14 md:px-20 py-10 bg-gray-100 h-auto flex
             justify-center gap-4 flex-wrap">
                {
                    posts && posts.map((post,i)=>{
                        return <PostList key={i} description={post.description} author={post.author} title={post.title} id={post.id} img={post.img}/>
                    })
                }
            </section>
        </>
    )
}