import Image from "../components/Image";
import { Link } from "react-router-dom";
const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-serif">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            magnam delectus ducimus.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blogAccent">John Doe</Link>
            <span>on</span>
            <Link className="text-blogAccent">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit asperiores, pariatur dignissimos explicabo voluptate atque illo architecto aperiam, nisi quia, molestias quidem laudantium sequi at vitae consequuntur</p>
        </div>
       
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-xl"/>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
