import { Link } from "react-router-dom";
import logo from "../components/app/data/logo.png";
import { FiMenu } from "react-icons/fi";
import { FaHome, FaBloggerB } from "react-icons/fa";
import { TbTestPipe } from "react-icons/tb";
import { MdWork } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
const NavBar = () => {
  return (
    <nav className="nav  ">
      {/* logo */}
      <header>
        <Link to="/" className="flex flex-col">
          <img src={logo} alt="" className=" w-6 h-7 md:w-8 md:h-10 ml-5 " />
          <h1 className=" font-bold  md:text-2xl  -mt-2 md:-mt-4">PsychTest</h1>
        </Link>
      </header>
      {/* nav links */}
      <ul className="hidden md:flex mr-8 space-x-2 md:space-x-3 justify-between font-semibold text-xl">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/test">Test</Link>
        </li>
        <li className="link">
          <Link to="/career">Career</Link>
        </li>
        <li className="link">
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
      <FiMenu fontSize={35} className=" absolute md:hidden top-4 right-5" />
      <div className=" mobileNav ">
        <ul className=" flex flex-col md:hidden  ">
          <li>
            <HiOutlineMenuAlt2 fontSize={30} className="text-slate-300 my-5 " />
          </li>
          <li className="linkMobile">
            <Link to="/" className="mobileLink">
              <FaHome fontSize={23} className="pt-1" />
              <span>Home</span>
            </Link>
          </li>
          <li className="linkMobile">
            <Link to="/test" className="mobileLink">
              <TbTestPipe fontSize={23} className="pt-1" />
              <span>Test</span>
            </Link>
          </li>
          <li className="linkMobile">
            <Link to="/career" className="mobileLink">
              <MdWork fontSize={23} className="pt-1" />
              <span>Career</span>
            </Link>
          </li>
          <li className="linkMobile">
            <Link to="/blog" className="mobileLink">
              <FaBloggerB fontSize={23} className="pt-1" />
              <span className="pb-2">Blog</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* phone and smaller devices */}
    </nav>
  );
};

export default NavBar;
