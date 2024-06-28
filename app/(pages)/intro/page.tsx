import Image from 'next/image';

export default function Page() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between opacity-95">
        <div className="fixed w-full h-screen z-0">
        </div>
        <div className='absolute left-0 top-0 z-1 w-full h-full'>
          <div className='bg-slate-500'>아이템1</div>
          <div className='bg-sky-700'>아이템2</div>
          <div className='bg-red-600'>아이템3</div>
        </div>
        
      </main>
    </>
  );
}
