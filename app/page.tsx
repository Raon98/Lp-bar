import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between opacity-95">
        <div className="relative w-full h-screen">
          <Image
            src="/assets/images/map0.jpg"
            alt="Description of the image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </main>
    </>
  );
}
