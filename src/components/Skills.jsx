import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di"
import { RiTailwindCssLine } from "react-icons/ri";
import { SiSelenium } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiApache } from "react-icons/si";
import Reveal from "./Reveal"

const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
        { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
        { name: 'tailwind', icon: <RiTailwindCssLine className="text-blue-600"/> },
        { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
        { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
        { name: 'React', icon: <DiReact className='text-blue-500' /> },
      ],
    },
    {
      category: 'QA Analyst',
      technologies: [
        { name: 'Selenium', icon: <SiSelenium className='text-green-500' /> },
        { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-600' /> },
        { name: 'java', icon: <FaJava className='text-red-500' /> },
        { name: 'Docker', icon: <FaDocker className='text-blue-600' /> },
        { name: 'Apache Jmeter', icon: <SiApache className='text-red-600' /> },
      ],
    },
  ]

const Skills = () => {
  return (
    <div className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
        <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
            I worked on various frontend and Automation projects. Check them <a href="https://github.com/shaileshchoudhary18" className="underline">here</a>.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        ">
            {skills.map((skill, index) => (
                <div key={index} className="border border-blue-900 p-6 rounded-lg bg-blue-900/20 shadow-lg 
                                w-full md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {skill.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span className="text-2xl">{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </Reveal>
    </div>
  )
}

export default Skills
