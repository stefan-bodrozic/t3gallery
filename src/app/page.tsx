import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic"

async function Images() {

  const images = await getMyImages()

  return (
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {
          images.map((image) => (
            <div key={image.id} className="flex w-48 h-48 flex-col">
              <Link href={`/img/${image.id}`}>
                <Image src={image.url} alt={image.name} style={{ objectFit: "contain" }} width={480} height={480} />
                <div>{image.name}</div>
              </Link>
            </div>
          ))
        }
      </div>
  )
}

export default async function HomePage() {

  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sign in</div>
      </SignedOut>
      
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
