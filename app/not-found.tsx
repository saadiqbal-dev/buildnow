import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 h-[calc(100vh_-_154px)] items-center justify-center flex-col gap-4">
      <h2 className="text-center text-2xl font-bold">404 Page Not Found</h2>
      <Link href="/" className="font-medium underline underline-offset-4">
        Go back home
      </Link>
    </div>
  );
}
