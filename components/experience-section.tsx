"use client"
import { HeaderSection } from "./header-section";
import Briefcase from "@/assets/briefcase-2-icon.svg"
import Calender from "@/assets/calender-icon.svg"
import Image from "next/image";
import { title } from "process";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Dev Full-Stack",
      company: "SEVN Technologies",
      date: "06/23 - Present",
    },
    {
      title: "Dev Front-end",
      company: "UX DOC",
      date: "02/23 - 03/24",
    },
    {
      title: "Monitor Front-end",
      company: "Kenzie Academy",
      date: "06/22 - 09/22",
    }
  ];

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 flex flex-col gap-16 px-4 items-center">
      <HeaderSection title="Experience" subtitle="Companies I have worked for" />

      <div className="max-w-lg flex flex-col gap-8 justify-center">
          <div className="flex items-center justify-center gap-1">
            <Image src={Briefcase } alt="briefcase" />
            <h4 className="font-semibold  text-xl sm:text-2xl">History</h4>
          </div>

          <ul>
            {
              experiences.map((experience, index) => (
                index  % 2 === 0 ? (
                  <li key={experience.title} className="grid grid-cols-[1fr_80px_1fr] sm:grid-cols-3">
                    <div className="flex flex-col gap-4">
                      <p className="text-[#333333] text-sm sm:text-base">{experience.title}</p>
                      <p className="text-xs sm:text-sm text-[#757575]">{experience.company}</p>
                      <div className="flex items-center gap-1">
                        <Image src={Calender} alt="date" />
                        <p className="text-xs sm:text-sm text-[#757575]">{experience.date}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center" >
                      <div className="w-3 h-3 rounded-full bg-[#757575]" />
                      <div className="h-full w-[1px] bg-[#757575]" />
                    </div>
                  </li>
                ):(
                  <li key={experience.title} className="grid grid-cols-[1fr_80px_1fr] sm:grid-cols-3">
                    <div />
                    <div className="flex flex-col items-center" >
                      <div className="w-3 h-3 rounded-full bg-[#757575]" />
                      <div className="h-full w-[1px] bg-[#757575]" />
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="text-[#333333] text-sm sm:text-base">{experience.title}</p>
                      <p className="text-xs sm:text-sm text-[#757575]">{experience.company}</p>
                      <div className="flex items-center gap-1">
                        <Image src={Calender} alt="date" />
                        <p className="text-xs sm:text-sm text-[#757575]">{experience.date}</p>
                      </div>
                    </div>
                  </li>
                )
              ))
            }
          </ul>
      </div>
    </section>
  )
}