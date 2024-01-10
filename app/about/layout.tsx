import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function AboutRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-red-300 p-5">My About Navbar</nav>
        {children}
      </body>
    </html>
  );
}
