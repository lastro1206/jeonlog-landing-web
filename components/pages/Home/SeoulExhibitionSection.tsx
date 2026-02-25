import Image from "next/image";

export default function SeoulExhibitionSection() {
  return (
    <section className='bg-[#F9F2E8] py-20 px-4 '>
      <div className='container mx-auto max-w-4xl text-center'>
        <Image
          src='/images/home2.png'
          alt='Seoul Exhibition'
          width={1000}
          height={1000}
          className='w-full h-full object-cover'
        />
      </div>
    </section>
  );
}
