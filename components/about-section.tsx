import Image from "next/image"
import DiogoIlustration from "@/assets/diogo-ilustration.png"
import Medal from "@/assets/medal-icon.svg"
import  Briefcase from "@/assets/briefcase-icon.svg"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-48 bg-muted/50 flex flex-col gap-16 px-4">
      <div className="text-center">
        <h2 className="font-semibold text-4xl">About Me</h2>
        <p className="text-sm text-[#757575]">
          Introduction
        </p>
      </div>

      <div className="flex items-center justify-center flex-col sm:flex-row gap-9 md:gap-16">
        <Image src={DiogoIlustration} alt="develop Diogo" className="w-[250px] h-[234px] lg:h-auto lg:w-auto" />

        <div className="max-w-lg flex flex-col gap-4">
          <div>
            <h4 className="font-semibold  text-xl mb-2 sm:text-2xl">Who am I?</h4>
            <p className="text-[#757575] text-xs sm:text-sm">
              I'm a software developer with over 3 years of experience
              specializing in building exceptional digital experiences. I focus on
              creating clean, efficient, and user-friendly applications that solve
              real-world problems.
            </p>
          </div>
          <div>
            <h4 className="font-semibold  text-xl mb-2 sm:text-2xl">My Journey</h4>
            <p className="text-[#757575] text-xs sm:text-sm">
              My passion for programming started when I was in college. Since
              then, I've worked with various technologies and frameworks,
              constantly learning and improving my skills to stay at the
              forefront of web development.
            </p>
          </div>

          <div className="flex items-center gap-3 mt-2 ali justify-center sm:justify-start">
            <div className="w-36 py-3 border rounded-xl flex flex-col items-center gap-1 sm:gap-2 sm:w-40 sm:py-4">
              <Image src={Medal} alt="experience" />
              <p className="text-sm">Experience</p>
              <span className="text-[10px] text-[#757575]">+3 Years Experience</span>
            </div>

            <div className="w-36 py-3 border rounded-xl flex flex-col items-center gap-1 sm:gap-2 sm:w-40 sm:py-4">
              <Image src={Briefcase} alt="experience" />
              <p className="text-sm">Projetos</p>
              <span className="text-[10px] text-[#757575]">6+ Completed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
