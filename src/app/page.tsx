'use client'
import { Alkatra, Preahvihear } from 'next/font/google';
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Progress } from "@nextui-org/react";

const skills = [
  {
    scope: 'Programming Languages', minor: '', techinques: [
      { skill: 'Java', type: 'secondary', progress: 95 },
      { skill: 'Python', type: 'secondary', progress: 80 },
      { skill: 'R', type: 'secondary', progress: 50 },
      { skill: 'SQL', type: 'secondary', progress: 60 },
      { skill: 'MDX', type: 'secondary', progress: 60 },
      { skill: 'JavaScript', type: 'secondary', progress: 75 },
      { skill: 'TypeScript', type: 'secondary', progress: 70 },]
  },
  {
    scope: 'Web Development', minor: '', techinques: [
      { skill: 'Vue.js', type: 'secondary', progress: 85 },
      { skill: 'Next.js', type: 'secondary', progress: 85 },
      { skill: 'Node.js', type: 'secondary', progress: 65 },
      { skill: 'express', type: 'secondary', progress: 70 },
      { skill: 'HTML', type: 'secondary', progress: 70 },
      { skill: 'CSS', type: 'secondary', progress: 60 }, 
      { skill: 'Bootstrap', type: 'secondary', progress: 70 },
      { skill: 'Tailwind CSS', type: 'secondary', progress: 50 }]
  },
  {
    scope: 'Data Analytics and Related Fields', techinques: [
      { skill: 'Data Pre-processing', type: 'secondary', progress: 90 },
      { skill: 'Descriptive Analysis', type: 'secondary', progress: 80 },
      { skill: 'Predictive Analysis', type: 'secondary', progress: 80 },
      { skill: 'Data Visualization', type: 'secondary', progress: 85 },
      { skill: 'SSIS', type: 'secondary', progress: 50 },
      { skill: 'SSAS', type: 'secondary', progress: 50 },
      { skill: 'SSMS', type: 'secondary', progress: 50 },]
  },
  {
    scope: 'Others', minor: '', techinques: [
      { skill: 'Microsoft Office', type: 'secondary', progress: 85 },
      { skill: 'Microsoft Azure', type: 'secondary', progress: 55 },
      { skill: 'MongoDB', type: 'secondary', progress: 85 },]
  },
]
const alkatra = Alkatra({ subsets: ['latin'] })
const preahvihear = Preahvihear({
  weight: "400",
  subsets: ['latin']
})

export default function Page() {
  return (
    <div className="container mx-auto py-10 pa divide-y">
      <h1 className={`text-3xl font-bold ${alkatra.className}`}>About me</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-5 gap-4 fa md:divide-x">

        <div>
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
                        <li key={x.skill}>
                          {x.skill}
                          <Progress
                            aria-label="Loading..."
                            value={x.progress}
                            classNames={{
                              base: "max-w-md",
                              track: "drop-shadow-md border border-default",
                              indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                              label: "tracking-wider font-medium text-default-600",
                              value: "text-foreground/60",
                            }}
                          />
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
