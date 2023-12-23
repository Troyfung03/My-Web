'use client'
import { Alkatra } from 'next/font/google';
import Link from 'next/link';

const alkatra = Alkatra({ subsets: ['latin'] })

export default function Page() {
  return (
    <div className="container mx-auto py-10 pa divide-y">
      <h1 className={`text-2xl font-bold ${alkatra.className}`}>I am Troy</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-5 gap-4 fa md:divide-x">

        <div>
          <h1 className={`text-1xl font-bold ${alkatra.className}`}>Introduction</h1>
          <p>Hello, everyone! My name is Troy, and I&apos;m thrilled to introduce myself. I am a passionate Computer Science student in my third year of studies.</p>
          <br />
          <p>As a Computer Science student, I am constantly seeking opportunities to expand my knowledge and take on new projects. I am excited to collaborate with like-minded individuals, learn from their experiences, and contribute to innovative ventures. I believe that by combining my technical skills, creativity, and problem-solving mindset, I can make a positive impact in the field of technology.
          </p>
          <br />
          <p>Thank you for taking the time to visit my website. I look forward to connecting with fellow enthusiasts and professionals to embark on exciting journeys together.</p>
        </div>
        <div>
          <h1 className={`text-1xl md:pl-5 font-bold ${alkatra.className}`}>Skills</h1>
        </div>
      </div>
      <div className="flex justify-between text-xs">
        <div>
          <span>LinkedIn:  </span>
          <a className="text-blue-500 hover:text-blue-700" href="https://www.linkedin.com/in/troy-fung-081030237">
            www.linkedin.com/in/troy-fung-081030237
          </a>
          <p>Email:  fungtroy63@gmail.com</p>
        </div>
        <p>Next.js was used to create this website.</p>
      </div>

    </div>

  )
}
