import {
  Github,
  Instagram,
  MailOpen,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border/40 py-6 md:px-8 md:py-0">
      <div className="container mx-auto justify-between py-12 flex gap-2">
        <div className="flex flex-col items-start gap-2">
          <Link
            href="/"
            className="mr-4 text-2xl flex items-center gap-2 lg:mr-6"
          >
            <span className="font-bold text-accent">Buildnow.ai</span>
          </Link>
          <p>Empowering Contact Centers with AI Precision.</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/platform">Platform</Link>
            </li>
            <li>
              <Link href="/product">Product</Link>
            </li>
            <li>
              <Link href="/company">Company</Link>
            </li>
            <li>
              <Link href="/customers">Customers</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-xl font-semibold">Social Media</h2>
          <div className="flex items-center gap-2">
            <Link
              href="#"
              className="hover:text-accent transition-all duration-300 ease-in-out rounded-full p-3 border"
            >
              <Twitter />
            </Link>
            <Link
              href="#"
              className="hover:text-accent transition-all duration-300 ease-in-out rounded-full p-3 border"
            >
              <Github />
            </Link>
            <Link
              href="#"
              className="hover:text-accent transition-all duration-300 ease-in-out rounded-full p-3 border"
            >
              <Instagram />
            </Link>
            <Link
              href="#"
              className="hover:text-accent transition-all duration-300 ease-in-out rounded-full p-3 border"
            >
              <Youtube />
            </Link>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <div className="flex flex-col items-center gap-2">
              <Link
                href="#"
                className="flex items-center gap-2 hover:text-accent transition-all duration-300 ease-in-out"
              >
                <MailOpen className="size-4" /> email@email.com
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 hover:text-accent transition-all duration-300 ease-in-out"
              >
                <Phone className="size-4" /> +1 (555) 555-5555
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row border-t border-border/40 py-6 md:px-8 md:py-0">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Buildnow.ai. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
