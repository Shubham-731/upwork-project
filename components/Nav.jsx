import {
  FaDashcube,
  FaBuromobelexperte,
  FaInfo,
  FaUserTie,
  FaRoute,
  FaChartBar,
  FaAngleDown,
} from "react-icons/fa";

const Nav = () => {
  return (
    <div className="w-[16%] px-7 py-5 pr-0 bg-white space-y-10 relative">
      <img src="/assets/images/logo.png" alt="logo" className="w-1/2 m-auto" />

      <ul className="space-y-3">
        <li className="space-x-3 flex items-center p-2 pl-4 cursor-pointer hover:bg-[#def4fc] hover:border-r-4 hover:border-[#03a1fc] w-full hover:text-[#0fa7ff]">
          <FaDashcube className="" />
          <span className="">Dashboard</span>
        </li>
        <li className="space-x-3 flex items-center p-2 pl-4 cursor-pointer hover:bg-[#def4fc] hover:border-r-4 hover:border-[#03a1fc] w-full hover:text-[#0fa7ff]">
          <FaBuromobelexperte className="" />
          <span className="">Discover</span>
          <FaAngleDown className="mr-auto" />
        </li>
        <li className="space-x-3 flex items-center p-2 pl-4 cursor-pointer hover:bg-[#def4fc] hover:border-r-4 hover:border-[#03a1fc] w-full hover:text-[#0fa7ff]">
          <FaInfo className="" />
          <span className="">Influencers</span>
        </li>
        <li className="space-x-3 flex items-center p-2 pl-4 cursor-pointer hover:bg-[#def4fc] hover:border-r-4 hover:border-[#03a1fc] w-full hover:text-[#0fa7ff]">
          <FaUserTie className="" />
          <span className="">Clients</span>
        </li>
        <li className="space-x-3 flex items-center p-2 pl-4 cursor-pointer hover:bg-[#def4fc] hover:border-r-4 hover:border-[#03a1fc] w-full hover:text-[#0fa7ff]">
          <FaRoute className="" />
          <span className="">Campeigns</span>
        </li>
        <li className="space-x-3 flex items-center p-2 pl-4 cursor-pointer hover:bg-[#def4fc] hover:border-r-4 hover:border-[#03a1fc] w-full hover:text-[#0fa7ff]">
          <FaChartBar className="" />
          <span className="">Reports</span>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
