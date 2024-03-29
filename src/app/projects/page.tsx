'use client'
import {Alkatra} from 'next/font/google';
const alkatra = Alkatra({ subsets: ['latin'] })

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-10">

        <div className={alkatra.className}>
          <div className="mb-5 pa">
            <h1 className="text-3xl font-bold">My projects</h1>
          </div>
        </div>
        <div className="flex justify-center">
            Building...
        </div>
      </div>
    </div>
  )
}
