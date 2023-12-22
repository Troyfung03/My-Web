'use client';
import { useEffect, useState } from "react";
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
      {data ? (
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {data.map((item) => (
              <div key={item._id} className="rounded-lg overflow-hidden">
                <img className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-95" src={item.url} alt={item.description} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  )
}


