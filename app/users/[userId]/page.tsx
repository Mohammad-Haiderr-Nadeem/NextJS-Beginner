import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetaData({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<Users> = await getUser(userId);
  const user = await userData;

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

export default async function UserId({ params: { userId } }: Params) {
  const userData: Promise<Users> = await getUser(userId);
  const userPostData: Promise<Posts[]> = await getUserPosts(userId);
  const user = await userData;

  return (
    <main>
      <h1>{user.name}</h1>
      <div>
        <Suspense fallback={<h2>Loading.......</h2>}>
          <UserPosts promise={userPostData} />
        </Suspense>
      </div>
    </main>
  );
}
