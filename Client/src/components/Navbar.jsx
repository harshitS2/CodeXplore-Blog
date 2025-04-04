import { useState } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        {/* <img src=""/> */}
        {/* <IKImage urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT} path="/logo.svg" alt="Logo" className="" /> */}
        {/* <Image src="logo.svg" className="flex" alt="CodexArenaLogo" w={32} h={32}/> */}
        <Link to="/" className="w-8 h-8">
          <span className="font-serif text-2xl font-bold text-blog-primary">
            Code<span className="text-blogAccent">Xplore</span>
          </span>
        </Link>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl "
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "≡"}
        </div>
        {/* Mobile links */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out  ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Trending</Link>
          <Link to={"/"}>Most Popular</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/login"}>
            <button className="py-2 px-4 rounded-3xl bg-blogAccent text-white">
              Login👋
            </button>
          </Link>
        </div>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Trending</Link>
        <Link to={"/"}>Most Popular</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/login"}>
          <button className="py-2 px-4 rounded-3xl bg-blogAccent text-white">
            Login👋
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
