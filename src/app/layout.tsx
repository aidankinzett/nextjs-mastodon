// These styles apply to every route in the application
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* add a basic tailwind nav bar */}
      <nav className="bg-gray-800">
        <Link href="/test">test</Link>
      </nav>

      <body>{children}</body>
    </html>
  );
}
