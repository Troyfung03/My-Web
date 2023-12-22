'use client';
import { useEffect, useState } from "react";
import { SingleImageDropzone } from "../lib/components/single-image-dropzone";
import { useEdgeStore } from "../lib/edgestore";
import Head from 'next/head'


export default function Page() {
  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();
  const [progress, setProgress] = useState(0);
  const [des, setDes] = useState('');
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
    <div>
      <Head>
        <meta name="troy" content="fung" />
      </Head>

      <div className="flex flex-col items-center m-6 gap-2">

        <SingleImageDropzone
          width={375}
          height={300}
          value={file}
          dropzoneOptions={{
            maxSize: 1024 * 1024 * 10,
          }}
          onChange={(file) => {
            setFile(file);
          }}
        />
        <div className="w-96">
          <div className="relative w-full min-w-[200px]">
            <textarea
              className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
              value={des}
              onChange={(event) => {
                setDes(event.target.value)
              }}>
            </textarea>
            <label
              className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Message
            </label>
          </div>
        </div>

        <div className="h-[6px] w-44 border border-stone-600 rounded overflow-hidden">
          <div className="h-full bg-black transition-all duration-150" style={{ width: `${progress}%` }} />
        </div>
        <button className="bg-gray-400 text-black rounded px-2 hover:opacity-80"
          onClick={async () => {
            if (file) {
              const res = await edgestore.myPublicImages.upload({
                file,
                onProgressChange: (progress) => {
                  setProgress(progress);
                }

              });
              //save data
              const updatedInfo = {
                url: res.url,
                description: des,
              };

              const r = await fetch('/api/photos', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedInfo)
              });
              setProgress(0);
              loadAsyncData();
              setFile(undefined);
              setDes('');
              setData([]);
            }
          }}>
          Upload
        </button>
        <div>
          {data ? (
            <div className='img-gallery'>

              {data.map((item) => (
                <div key={item._id}>
                  <img className="rounded-[7px]" src={item.url} alt={item.description} />
                  <br></br>
                </div>
              )
              )}
            </div>
          ) : (
            <p>Loading data...</p>
          )}
        </div>
      </div>
    </div>)
}


