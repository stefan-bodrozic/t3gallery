import { db } from "~/server/db";

export const dynamic = "force-dynamic"

const mockUrls = [
  "https://utfs.io/f/f97efddc-fd66-40ed-b0a6-aacef99f63d8-jlo1ag.png",
  "https://utfs.io/f/8b52fbe0-9e67-4206-80db-ac84461c91f7-3vknjq.jpg",
  "https://utfs.io/f/f97efddc-fd66-40ed-b0a6-aacef99f63d8-jlo1ag.png",
  "https://utfs.io/f/8b52fbe0-9e67-4206-80db-ac84461c91f7-3vknjq.jpg",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany()

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>
            {post.name}
          </div>
        ))}
        {
          [...mockImages, ...mockImages, ...mockImages, ...mockImages, ...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image, index) => (
            <div key={image.id + '-' + index} className="w-48 p-4">
              <img src={image.url} alt="image" />
            </div>
          ))
        }
      </div>
    </main>
  );
}
