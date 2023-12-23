'use client'
import { Alkatra } from 'next/font/google';
const alkatra = Alkatra({ subsets: ['latin'] })
export default function Page() {
  return (
    <div className={`container mx-auto py-10 pa`}>
      <h1 className={`text-2xl font-bold ${alkatra.className}`}>I am Troy</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 py-5 gap-4 fa ">
      <div>
      <p>Hello, everyone! My name is Troy, and I'm thrilled to introduce myself. I am a passionate Computer Science student in my third year of studies.
        I have a solid foundation in a variety of programming languages and technologies. I am proficient in Python, Java, and JavaScript, which allows me to tackle a wide range of programming challenges and develop robust solutions. Additionally, I have expertise in web development technologies such as HTML, CSS, and Bootstrap, enabling me to create visually appealing and user-friendly websites.
        I am well-versed in frameworks like Node.js and Vue.js, which provide me with the tools to build efficient and dynamic applications on both the server side and the front end. Moreover, I have experience working with database management systems like SSIS (SQL Server Integration Services) and SSMS (SQL Server Management Studio), enabling me to effectively handle data integration and management tasks.
        When it comes to data visualization and analysis, I am skilled in using Power BI, a powerful business intelligence tool. With Power BI, I can transform raw data into meaningful visualizations and reports, providing valuable insights for decision-making. Additionally, I am proficient in leveraging Microsoft Excel for data analysis, allowing me to extract valuable information from datasets.
        As a Computer Science student, I am constantly seeking opportunities to expand my knowledge and take on new projects. I am excited to collaborate with like-minded individuals, learn from their experiences, and contribute to innovative ventures. I believe that by combining my technical skills, creativity, and problem-solving mindset, I can make a positive impact in the field of technology.
        Thank you for taking the time to get to know me. I look forward to connecting with fellow enthusiasts and professionals to embark on exciting journeys together.</p>
      </div>
        <div>
          dada
        </div>
      </div>

    </div>
  )
}
