import { useState } from "react";
import { Menu, X } from "lucide-react"; // or use any icon library like Heroicons

function Navbar() {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "activities", label: "Activities" },
    { id: "contact", label: "Contact" },
  ];

  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (id) => {
    setActive(id);
    setIsOpen(false); // close menu on click (mobile)
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-gold-400 z-50 shadow-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-xl font-extrabold tracking-wide text-[#FFD700] transition-all duration-300">
          Prem<span className="text-white">Kumar P</span>
          {active && active !== "home" && (
            <span className="ml-2 text-sm text-gray-300">
              | {active.charAt(0).toUpperCase() + active.slice(1)}
            </span>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-wrap gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleLinkClick(item.id)}
              className={`text-[#FFD700] transition duration-200 transform hover:scale-110 hover:drop-shadow-[0_0_6px_#FFD700]
              ${active === item.id ? "font-bold text-yellow-400" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-yellow-400 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-black border-t border-gray-800">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`text-[#FFD700] transition duration-200 hover:underline
                ${active === item.id ? "font-bold text-yellow-400" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
