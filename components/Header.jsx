import { FaSearch, FaInfoCircle, FaBell, FaAngleDown } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full px-7 py-4 bg-[#262169] flex items-center justify-between">
      <p className="text-white font-bold">Dashboard Overview</p>

      <div className="relative space-x-4 flex items-center">
        <div className="relative bg-[#333d8f] rounded-lg">
          <span className="absolute top-2 left-2 flex items-center">
            <img
              src="/assets/images/search.png"
              alt="info"
              className="inline-block"
            />
          </span>
          <input
            type="text"
            className="w-60 py-1 pr-3 pl-8 text-white bg-[#333d8f] rounded-md border-none outline-none"
            placeholder="Looking for someone"
          />
        </div>

        <div className="bg-[#333d8f] rounded-full px-3 py-1 text-white flex items-center">
          <img
            src="/assets/images/Info.png"
            alt="info"
            className="inline-block mr-1 w-4"
          />
          <span className="inline-block">Help ?</span>
        </div>

        <div className="bg-[#333d8f] p-2 text-white rounded-full relative flex items-center">
          <img
            src="/assets/images/BellSimple.png"
            alt="info"
            className="inline-block mr-1 w-4"
          />
        </div>

        <div className="flex items-center space-x-2">
          <p className="text-white">Minhas Asif</p>
          <img
            src="/assets/images/random-user.png"
            alt="Random user"
            className="w-7 h-7 rounded-full"
          />
          <FaAngleDown className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Header;
