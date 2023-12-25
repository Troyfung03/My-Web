'use client'
import { useEffect, useRef, useState, RefObject } from "react";
import Image from "next/image";
import { Indie_Flower } from "next/font/google";


const indie = Indie_Flower({ weight: "400", subsets: ["latin"] });

export default function Page() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    loadAsyncData();
  }, []);

  const loadAsyncData = async () => {
    try {
      const response = await fetch("/api/photos");
      const jsonData = await response.json();
      setData(jsonData.photos);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const circlesRef: RefObject<HTMLUListElement> = useRef(null);

  return (
    <div className="min-h-screen bg-indigo-900">
      <ul className="circles" ref={circlesRef}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="container mx-auto py-10">
        <div className={indie.className}>
          <div className="mb-5 pa">
            <h1 className="text-2xl font-bold">My gallery</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {data.map((item) => (
            <div
              key={item._id}
              className="overflow-hidden flex justify-center items-center"
            >
              <Image
                className="rounded-lg w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-95 smaller-image"
                width={500}
                height={500}
                src={item.url}
                alt={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}