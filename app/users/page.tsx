import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metaData: Metadata = {
  title: "Users",
};

export default async function Users() {
  const usersData: Promise<Users[]> = getAllUsers();
  const users = await usersData;
  return (
    <main>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </p>
        </div>
      ))}
    </main>
  );
}
