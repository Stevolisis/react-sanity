import { useParams } from "react-router-dom";
import Header from "../components/Header";


export default function Post(){
    const { id } = useParams();

    return(
        <>
            <Header type='post' title='Solar Energy'/>
            <section className="px-7 sm:px-14 md:px-20">
                <div className="py-12">
                    <h2 className=" font-bold text-4xl text-indigo-950">Solar Energy</h2>
                    <p className="text-gray-800 text-sm pt-2">by James Bond</p>
                    <p className="text-gray-600 text-xs"> 10 July 2023</p>
                </div>
                <div>
                    <img src={`/advert${id}.jpg`} alt={`post-${id}`}
                        className="w-full h-[400px] object-cover"
                    />
                </div>
                <div className="py-7">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat sem at mauris suscipit porta. Cras metus velit, elementum sed pellentesque a, pharetra eu eros. Etiam facilisis placerat euismod. Nam faucibus neque arcu, quis accumsan leo tincidunt varius. In vel diam enim. Sed id ultrices ligula. Maecenas at urna arcu. Sed quis nulla sapien. Nam felis mauris, tincidunt at convallis id, tempor molestie libero. Quisque viverra sollicitudin nisl sit amet hendrerit. Etiam sit amet arcu sem. Morbi eu nibh condimentum, interdum est quis, tempor nisi. Vivamus convallis erat in pharetra elementum. Phasellus metus neque, commodo vitae venenatis sed, pellentesque non purus. Pellentesque egestas convallis suscipit. Ut luctus, leo quis porta vulputate, purus purus pellentesque ex, id consequat mi nisl quis eros. Integer ornare libero quis risus fermentum consequat. Mauris pharetra odio sagittis, vulputate magna at, lobortis nulla. Proin efficitur, nisi vel finibus elementum, orci sem volutpat eros, eget ultrices velit mi sagittis massa. Vestibulum sagittis ullamcorper cursus. Ut turpis dolor, tempor ut tellus et, sodales ultricies elit. Ut pharetra tristique est ac dictum. Integer ac consectetur purus, vehicula efficitur urna. Donec ultrices accumsan ipsum vitae faucibus. Quisque malesuada ex nisi, a bibendum erat commodo in. Pellentesque suscipit varius gravida. Nam scelerisque est sit amet laoreet pharetra. Vivamus quis ligula sed lacus mattis mollis. Vivamus facilisis orci rutrum nulla porta dignissim. Fusce fermentum id nibh laoreet volutpat. Suspendisse venenatis, risus sed euismod finibus, risus arcu fringilla augue, nec vulputate felis nisl et enim. In ornare, massa a cursus cursus, nisl mi ornare mauris, nec porttitor risus erat ut odio. Integer malesuada hendrerit purus ullamcorper molestie. Fusce imperdiet orci vitae purus suscipit rutrum. Nunc ac metus ac mi commodo sagittis at in leo. Vestibulum est lorem, consequat vel dictum non, imperdiet eu felis. Vivamus molestie sapien id quam rutrum, eget hendrerit eros finibus. Morbi in justo at felis blandit fringilla at faucibus purus. Donec ac aliquet purus, vitae tincidunt nulla. Curabitur ultricies auctor quam tincidunt molestie. Quisque tristique metus nunc, in pretium lectus dictum at. Nullam scelerisque placerat dui, maximus commodo augue mollis quis. Nulla gravida ex sed lectus consectetur laoreet et vel ex. Proin pretium libero non leo mattis, ullamcorper scelerisque diam hendrerit. Quisque gravida, dui a porttitor interdum, velit quam pulvinar arcu, eu blandit sapien velit ut lacus. Vestibulum congue eleifend odio, in aliquam leo sodales sed. Nam eu lacinia ipsum. Aenean sagittis nisl eu sodales lacinia. Duis nulla ante, suscipit a nibh sit amet, blandit luctus elit. Etiam a pellentesque lectus. Morbi pulvinar dolor a mi volutpat, sit amet finibus est mattis. Nunc egestas feugiat odio sed mollis. Vestibulum accumsan, velit id facilisis fermentum, nisi risus faucibus nulla, non condimentum mauris tortor eu dui. In urna ante, consectetur ac nunc in, hendrerit elementum lacus. Pellentesque pharetra felis sit amet erat pellentesque malesuada. Sed vel placerat lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque sit amet bibendum diam, sit amet convallis mi. Sed tristique leo sit amet urna lacinia ullamcorper sit amet non sem. Aliquam erat volutpat. Etiam accumsan sit amet odio sit amet posuere. Sed lobortis auctor est a mollis. Duis leo leo, condimentum finibus magna et, tempus tincidunt nisi. Praesent quis molestie elit. Mauris ante orci, luctus et lectus nec, vestibulum suscipit sem. Duis consequat felis id est pellentesque, sit amet vulputate dui commodo. Vestibulum efficitur, elit eu mattis faucibus, turpis nisl lacinia sapien, nec mattis ante massa non felis. Nulla at gravida orci, nec blandit nisl. Duis sed erat a tortor accumsan scelerisque. Donec congue quam vel urna consequat, id sagittis ante pretium. Vivamus posuere, arcu nec tincidunt eleifend, ligula metus convallis odio, nec pulvinar dui leo at tortor. Suspendisse potenti. Sed a euismod mi. Maecenas suscipit luctus enim, ut facilisis elit venenatis ut. Aenean ullamcorper at erat a dictum. Donec vel nulla elit. Aliquam pharetra massa elit, sed maximus lectus mollis ut. Phasellus a ligula et neque fringilla efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam euismod lobortis enim et condimentum. Suspendisse pharetra.
                    </p>
                </div>
            </section>
        </>
    )
}