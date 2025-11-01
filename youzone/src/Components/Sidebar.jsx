import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillPlayCircle, AiOutlineFire } from "react-icons/ai";
import { MdSubscriptions, MdSell, MdMovie } from "react-icons/md";
import { GiCookingPot, GiWeightLiftingUp, GiLightBulb } from "react-icons/gi";

import {
  FaMusic,
  FaGamepad,
  FaTrophy,
  FaNewspaper,
  FaArtstation,
  FaDollarSign,
  FaCamera,
  FaLaptop,
  FaLaugh,
} from "react-icons/fa";
import { ImBooks, ImAirplane, ImFire } from "react-icons/im";
import { HiShoppingBag } from "react-icons/hi2";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  const menuSections = [
    {
      title: null,
      items: [
        { name: "Home", icon: <AiFillHome /> },
        { name: "Sports", icon: <FaTrophy /> },
        { name: "Gaming", icon: <FaGamepad /> },
        { name: "Live", icon: <AiOutlineFire /> },
      ],
    },
    {
      title: "Interest",
      items: [
        { name: "Music", icon: <FaMusic /> },
        { name: "Shopping", icon: <HiShoppingBag /> },
        { name: "News", icon: <FaNewspaper /> },
        { name: "Movies", icon: <MdMovie /> },
      ],
    },
    {
      title: "Learning",
      items: [
        { name: "Course", icon: <MdSell /> },
        { name: "Trending", icon: <ImFire /> },
        { name: "Art", icon: <FaArtstation /> },
        { name: "Tech", icon: <FaLaptop /> },
      ],
    },
    {
      title: "Daily Life",
      items: [
        { name: "Comedy", icon: <FaLaugh /> },
        { name: "Fitness", icon: <FaTrophy /> },
        { name: "Travel", icon: <ImAirplane /> },
        { name: "Cooking", icon: <GiCookingPot /> },
      ],
    },

    {
      title: "Updates",
      items: [
        { name: "Motivation", icon: <GiLightBulb /> },
        { name: "Photography", icon: <FaCamera /> },
        { name: "Health", icon: <GiWeightLiftingUp /> },
        { name: "Finance", icon: <FaDollarSign /> },
      ],
    },
  ];

  return (
    <div className=" sticky top-0 h-screen w-52 p-4  shadow-sm shadow-gray-300 overflow-y-auto">
      {menuSections.map((section, idx) => (
        <div key={idx} className="mb-4">
          {section.title && (
            <h1 className="font-bold pt-4 text-gray-700">{section.title}</h1>
          )}
          <ul>
            {section.items.map((item, i) => {
              const isActive = selectedCategory === item.name;
              return (
                <li
                  key={i}
                  className={`flex items-center hover:bg-slate-200 gap-2 py-2 px-2 rounded-md cursor-pointer ${
                    isActive ? "font-bold bg-gray-100" : ""
                  }`}
                  onClick={() => setSelectedCategory(item.name)}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.path ? (
                    <Link
                      to={item.path}
                      className={isActive ? "font-bold text-amber-500" : ""}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    item.name
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
