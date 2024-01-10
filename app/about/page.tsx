import Link from "next/link";

export default function About() {
  return (
    <main>
      <div className="text-center">
        <h1>About Page</h1>
        <Link href="/">Link to HomePage</Link>
      </div>
    </main>
  );
}
