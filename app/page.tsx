import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="text-center">
        <Link href={"/about"}>Go to About Page</Link>
        <div>
          <Link href={"/users"}>Go to Users Page</Link>
        </div>
      </div>
    </main>
  );
}
