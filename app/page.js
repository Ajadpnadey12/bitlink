import Image from "next/image";
import localFont from "next/font/local"

import Link from "next/link";
const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold-copy.ttf",
  variable: "--font-poppins",
  weight: "800",
});

export default function Home() {
  return (
  <main className="bg-purple-100">
  <section className="grid grid-cols-2 h-[50vh]">
    <div className="flex flex-col gap-4 justify-center items-center">
      <p className={`${poppins.className} text-2xl font-bold`}>
        the best shotner in the market
      </p>
      <p className="px-56 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing, Accusantium voluptatum odio labore, magni, eum magnam nisi illum aliquam, distinctio nostrum molestiae voluptatem obcaecati! 
      </p>
         <div className='flex gap-3'>
          <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
          <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link>
        </div>
    </div>
      <div className=" flex justify-start relative">
        <Image className="mix-blend-darken" alt="an Image of a vector" src={"/vector.jpg"} fill={true} />
      </div>
  </section>
  </main>
  );
}
