import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Icons } from "../assets/icons";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  const menuSections = [
    {
      title: null,
      items: [
        { name: "All", icon: Icons.home },
        { name: "Sports", icon: Icons.trophy },
        { name: "Gaming", icon: Icons.gamepad },
        { name: "Live", icon: Icons.flame },
      ],
    },
    {
      title: "Interest",
      items: [
        { name: "Music", icon: Icons.music },
        { name: "Shopping", icon: Icons.shopping },
        { name: "News", icon: Icons.newspaper },
        { name: "Movies", icon: Icons.film },
      ],
    },
    {
      title: "Learning",
      items: [
        { name: "Course", icon: Icons.book },
        { name: "Trending", icon: Icons.trending },
        { name: "Art", icon: Icons.palette },
        { name: "Tech", icon: Icons.laptop },
      ],
    },
    {
      title: "Daily Life",
      items: [
        { name: "Comedy", icon: Icons.laugh },
        { name: "Fitness", icon: Icons.dumbbell },
        { name: "Travel", icon: Icons.plane },
        { name: "Cooking", icon: Icons.utensils },
      ],
    },
    {
      title: "Updates",
      items: [
        { name: "Motivation", icon: Icons.lightbulb },
        { name: "Photography", icon: Icons.camera },
        { name: "Health", icon: Icons.dumbbell },
        { name: "Finance", icon: Icons.wallet },
      ],
    },
  ];

  return (
    <div className="sticky top-0 h-screen w-36 sm:w-44 md:w-52 p-4 shadow-sm shadow-gray-300 overflow-y-auto bg-white">
      {menuSections.map((section, idx) => (
        <div key={idx} className="mb-4">
          {section.title && (
            <h1 className="font-bold pt-4 text-gray-700 text-sm uppercase tracking-wide">
              {section.title}
            </h1>
          )}
          <ul>
            {section.items.map((item, i) => {
              const isActive = selectedCategory === item.name;
              return (
                <li
                  key={i}
                  className={`flex items-center hover:bg-gray-100 gap-2 py-2 px-2 rounded-md cursor-pointer transition-all duration-200 ${
                    isActive ? "font-semibold bg-gray-100 text-blue-500" : ""
                  }`}
                  onClick={() => setSelectedCategory(item.name)}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.path ? (
                    <Link
                      to={item.path}
                      className={isActive ? "text-blue-500" : "text-gray-800"}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="text-gray-700">{item.name}</span>
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
