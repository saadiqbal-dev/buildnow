import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "./ui/button";

const Routes = [
  {
    title: "Platform",
    slug: "/platform",
    children: [
      {
        title: "AI Phone Agents",
        slug: "/platform/ai-phone-agent",
      },
      {
        title: "AI Video Training",
        slug: "/platform/video-generation",
      },
      {
        title: "AI Trainer",
        slug: "/platform/ai-trainer",
      },
    ],
  },
  {
    title: "Industries",
    slug: "#",
    children: [
      {
        title: "Call Centers",
        slug: "/industries/call-centers",
      },
      {
        title: "Legal",
        slug: "/industries/legal",
      },
      {
        title: "Utilities",
        slug: "/industries/utilities",
      },
      {
        title: "Telecommunications",
        slug: "/industries/telecommunications",
      },
    ],
  },
  {
    title: "Pricing",
    slug: "/pricing",
  },
  {
    title: "Resources",
    slug: "/resources",
    children: [
      {
        title: "Company",
        slug: "/resources/company",
      },
    ],
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#F4F2EC] shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center justify-start gap-10">
            <div>
              <Link to="/" className="text-2xl font-bold text-black">
                Buildnow AI
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {Routes.map((route) => (
                <div key={route.slug} className="relative group">
                  <Link
                    to={route.slug}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    activeProps={{
                      className: "text-blue-600",
                    }}
                  >
                    {route.title}
                  </Link>

                  {/* Dropdown for Products */}
                  {route.children && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {route.children.map((child) => (
                          <Link
                            key={child.slug}
                            to={child.slug}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                            activeProps={{
                              className: "bg-blue-50 text-blue-600",
                            }}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
          <div className=" gap-4 hidden md:flex">
            <Button variant={"outline"}>Contact Sales</Button>
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
              ></span>
              <span
                className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            {Routes.map((route) => (
              <div key={route.slug}>
                <Link
                  to={route.slug}
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                  activeProps={{
                    className: "text-blue-600",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.title}
                </Link>

                {/* Mobile Dropdown for Products */}
                {route.children && (
                  <div className="ml-4 mt-2">
                    {route.children.map((child) => (
                      <Link
                        key={child.slug}
                        to={child.slug}
                        className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                        activeProps={{
                          className: "text-blue-600",
                        }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className=" gap-2 w-full flex flex-col">
              <Button>Contact Sales</Button>
              <Button variant="outline">Get Started</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
