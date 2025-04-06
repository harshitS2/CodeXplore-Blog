import Image from "./Image";
import { Link } from "react-router-dom";

const PostsListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image src="postImg.jpeg" className="rounded-2xl object-cover" w="735"/>
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          doloribus nobis consequatur?
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written By </span>
          <Link className="text-blogAccent">John Doe</Link>
          <span>on</span>
          <Link className="text-blogAccent">Web Desing</Link>
          <span>2 days ago</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, obcaecati libero, modi, odit quas corporis doloribus totam in culpa odio optio minima! Minima porro molestiae velit hic id harum fugiat, reprehenderit mollitia impedit ducimus.</p>
        <Link to="/test" className="underline text-sm text-blogAccent">
        Read More
        </Link>
      </div>
    </div>
  );
};

export default PostsListItem;
