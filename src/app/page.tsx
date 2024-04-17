import Link from "next/link";
import { mock } from "node:test";

const mockUrls = [
  "https://utfs.io/f/a9d96efb-8a2a-4dd9-b1dd-d11197e7cd69-d4237w.jpg",
  "https://utfs.io/f/c38500e3-ca4b-4850-8ed1-1644e0aa69e0-ighanh.jpg",
  "https://utfs.io/f/2236c707-6f02-4c30-99de-f52823450b2d-pwknib.jpg",
  "https://utfs.io/f/f24af293-543e-4e03-b698-4f80eedc8d36-btdi4h.jpg",
  "https://utfs.io/f/e125d7a2-549d-4d9f-bd9b-d96019a00dd2-94863n.jpg"
];


const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))


export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div className="w-48" key={image.id}>
            <img src={image.url} alt="image" className="" />
          </div>
        ))}
      </div>
    </main>
  );
}
