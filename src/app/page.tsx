'use client'
import { Alkatra, Preahvihear } from 'next/font/google';
import Link from 'next/link';
import { useEffect } from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";

const skills = [
  { scope: 'Programming Languages and Techniques', minor: '', techinques: ['Java', 'Python', 'R', 'SQL', 'MDX', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
  { scope: 'Web Framework', minor: '', techinques: ['Vue.js', 'Next.js', 'Node.js', 'express', 'Bootstrap', 'Tailwind CSS'] },
  {
    scope: 'Data Analytics and Related Fields', techinques: ['Data Pre-processing', 'Predictive Analysis',
      'Descriptive Analysis', 'Data Visualization', 'SSIS', 'SSAS', 'SSMS', 'Excel',]
  },
  { scope: 'Others', minor: '', techinques: ['Microsoft Office', 'Microsoft Azure', 'MongoDB'] },
]
const alkatra = Alkatra({ subsets: ['latin'] })
const preahvihear = Preahvihear({
  weight: "400",
  subsets: ['latin']
})

export default function Page() {
  return (
    <div className="container mx-auto py-10 pa divide-y">
      <h1 className={`text-3xl font-bold ${alkatra.className}`}>I am Troy</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-5 gap-4 fa md:divide-x">

        <div>
          <h1 className={`${alkatra.className} text-2xl font-bold `}>Introduction</h1>
          <p>Hello, everyone! My name is Troy, and I&apos;m thrilled to introduce myself. I am a passionate Computer Science student in my third year of studies.</p>
          <br />
          <p>As a Computer Science student, I am constantly seeking opportunities to expand my knowledge and take on new projects. I am excited to collaborate with like-minded individuals, learn from their experiences, and contribute to innovative ventures. I believe that by combining my technical skills, creativity, and problem-solving mindset, I can make a positive impact in the field of technology.
          </p>
          <br />
          <p>Thank you for taking the time to visit my website. I look forward to connecting with fellow enthusiasts and professionals to embark on exciting journeys together.</p>
        </div>
        <div className="md:pl-5 ">
          <h1 className={`${alkatra.className} text-2xl font-bold `}>Skills</h1>
          <Accordion variant="bordered">
            {skills.map((item, index) => (
              <AccordionItem key={index} aria-label="Accordion 1" title={item.scope}>
                <div>
                  <div id={item.scope}>
                    <ul className={`${preahvihear.className}`}>
                      {item.techinques.map((x) => (
                        <li key={x}>
                          {x}
                        </li>
                      ))
                      }
                    </ul>
                  </div>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="flex justify-between text-xs">
        <div>
          <p>Email:  fungtroy63@gmail.com</p>
          <span>LinkedIn:  </span>
          <a className="text-blue-500 hover:text-blue-700" href="https://www.linkedin.com/in/troy-fung-081030237">
            www.linkedin.com/in/troy-fung-081030237
          </a>
        </div>
        <p>Next.js was used to create this website.</p>
      </div>
    </div>

  )
}
