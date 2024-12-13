import Link from "next/link";
import { Button } from "@/components/ui/button";

type Route = {
  label: string;
  href: string;
};

const routes: Route[] = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/platform" },
  { label: "Product", href: "/product" },
  { label: "Company", href: "/company" },
  { label: "Customers", href: "/customers" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 justify-between items-center px-4">
        {/* Logo */}
        <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
          <span className="font-bold text-accent">Buildnow.ai</span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-4">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className="hover:text-accent transition-all duration-300 ease-in-out"
            >
              {route.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Button>Get Started Today</Button>
      </div>
    </header>
  );
}
