type Props = {
  promise: Promise<Posts[]>;
};

export default async function UserPosts({ promise }: Props) {
  const posts = await promise;
  return (
    <main>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <div></div>
        </article>
      ))}
    </main>
  );
}
