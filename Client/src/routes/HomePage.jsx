import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostLists from "../components/PostLists";

const HomePage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>•</span>
        <div className="text-blogAccent">Blogs and Articles</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet ea
            aspernatur voluptas beatae quibusdam{" "}
          </p>
        </div>
        <Link to="/write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            // className="text-lg tracking-widest animate-spin animateButton"
            className="text-lg tracking-widest"
          >
            {/* Define a circular path */}
            <path
              id="circlePath"
              d="M 100, 100
             m -75, 0
             a 75,75 0 1,1 150,0
             a 75,75 0 1,1 -150,0"
              fill="none"
            />
            {/* <circle cx="100" cy="100" r="75" fill="black" /> */}
            {/* Attach text to the path */}
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your Story
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your Idea
              </textPath>
            </text>
          </svg>
          <button className=" absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blogAccent rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="none" stroke="white"  strokeWidth="2">
          <line x1="6" y1="18" x2="18" y2="6"/>
          <polyline points="9 6 18 6 18 15"/>
            </svg>
          </button>
        </Link>
      </div>
      <MainCategories />
      <FeaturedPosts />
      <div className="">
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostLists />
      </div>
    </div>
  );
};

export default HomePage;
