'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { Indie_Flower } from 'next/font/google'

const indie = Indie_Flower({ weight: '400',subsets: ['latin']})

export default function Page() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    loadAsyncData();
  }, []);

  const loadAsyncData = async () => {
    try {
      const response = await fetch('/api/photos');
      const jsonData = await response.json();
      setData(jsonData.photos);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (

    <div className="min-h-screen bg-whitesmoke">

      <div className="container mx-auto py-10">
        <div className={indie.className} >
        <div className= "mb-5 pa">
        <h1 className="text-2xl font-bold">My gallery</h1>
      </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {data.map((item) => (
            <div key={item._id} className=" overflow-hidden flex justify-center items-center">
              <Image className="rounded-lg w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-95 smaller-image"
                placeholder="blur"
                blurDataURL={item.thumbnailUrl} width={500} height={500} src={item.url} alt={item.description} />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}


