"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Nav } from "./nav";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      suppressHydrationWarning
      className={`fixed min-[1800px]:max-w-[1534px] top-0 z-50 w-full  transition-colors duration-300 ease-in-out ${
        scrolled ? "bg-muted/20 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="relative flex h-14 justify-between items-center px-4">
        {/* Logo */}
        <Link
          href="/"
          className="mr-4 flex items-center gap-2 lg:mr-6"
          onClick={() => setMenuOpen(false)}
        >
          <span className={cn(scrolled ? "text-black" : "text-white")}>
            Buildnow.ai
          </span>
        </Link>

        <div className="hidden md:block">
          <Nav textColor={scrolled ? "text-black" : "text-white"} />
        </div>

        {/* CTA */}
        <Button className="hidden md:block">Get Started Today</Button>

        <div className="md:hidden">
          <Button size="icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-0 mx-4 top-[calc(100%_+_16px)] bg-white/80 backdrop-blur-sm rounded-md p-4 w-[calc(100%_-_32px)] shadow-lg"
            >
              <Nav textColor="text-black" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
