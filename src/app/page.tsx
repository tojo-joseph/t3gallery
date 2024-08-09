import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/450c09aa-dd7c-47c2-9bb2-377456fe64c8-y81kse.png",
  "https://utfs.io/f/978cef29-f432-43fd-a93a-59fa3b5c72d7-rrks80.png",
  "https://utfs.io/f/45291020-518c-49e2-9e8e-a71402c0d6ae-cm0wr3.png",
  "https://utfs.io/f/a3f7d160-8219-4665-96ba-c71b6cee0982-n03ws.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
