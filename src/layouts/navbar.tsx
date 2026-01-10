import { ChevronDown, Menu, X } from "@lucide/astro";
import { useState } from "react";

const Navbar = () => {
  const [currentView, setCurrentView] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-blue-100 bg-[#F0F7FF]/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center" onClick={() => handleNavigate()}>
            <span className="flex cursor-pointer items-center text-2xl font-bold text-slate-900">
              Edukids<span className="text-blue-600">.</span>
            </span>
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            <button
              onClick={() => handleNavigate()}
              className={`text-sm font-medium transition-colors ${
                currentView === "home"
                  ? "text-blue-600"
                  : "text-slate-700 hover:text-blue-600"
              }`}
            >
              Home
            </button>
            <div className="group relative">
              <button className="flex items-center text-sm font-medium text-slate-700 transition-colors group-hover:text-blue-600">
                Programs <ChevronDown size={16} class="ml-1" />
              </button>
            </div>
            <button
              onClick={() => handleNavigate()}
              className={`text-sm font-medium transition-colors ${
                currentView === "team"
                  ? "text-blue-600"
                  : "text-slate-700 hover:text-blue-600"
              }`}
            >
              Our Team
            </button>
            <button
              onClick={() => handleNavigate()}
              className={`text-sm font-medium transition-colors ${
                currentView === "contact"
                  ? "text-blue-600"
                  : "text-slate-700 hover:text-blue-600"
              }`}
            >
              Contact
            </button>
            <a
              href="#"
              className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
            >
              Resources
            </a>
          </div>

          <div className="hidden md:block">
            <button className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800">
              Get Started
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="space-y-4 bg-white px-4 pt-2 pb-6 shadow-lg md:hidden">
          <button
            onClick={() => handleNavigate()}
            className="block w-full text-left text-base font-medium text-slate-700"
          >
            Home
          </button>
          <button className="block w-full text-left text-base font-medium text-slate-700">
            Programs
          </button>
          <button
            onClick={() => handleNavigate()}
            className="block w-full text-left text-base font-medium text-slate-700"
          >
            Our Team
          </button>
          <button
            onClick={() => handleNavigate()}
            className="block w-full text-left text-base font-medium text-slate-700"
          >
            Contact
          </button>
          <button className="block w-full text-left text-base font-medium text-slate-700">
            Resources
          </button>
          <button className="w-full rounded-full bg-slate-900 px-6 py-3 text-base font-medium text-white">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
