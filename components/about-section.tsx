import Image from "next/image"
import DiogoIlustration from "@/assets/diogo-ilustration.png"
import Medal from "@/assets/medal-icon.svg"
import  Briefcase from "@/assets/briefcase-icon.svg"


export function AboutSection() {
  return (
    <section id="about" className="w-full py-48 bg-muted/50 flex flex-col gap-16">
      <div className="text-center">
        <h2 className="font-semibold text-4xl">About Me</h2>
        <p className="text-sm text-[#757575]">
          Introduction
        </p>
      </div>

      <div className="flex items-center justify-center gap-16">
        <Image src={DiogoIlustration} alt="develop Diogo"  />

        <div className="max-w-lg flex flex-col gap-4">
          <div>
            <h4 className="font-semibold text-2xl mb-2">Who am I?</h4>
            <p className="text-sm text-[#757575]">
              I'm a software developer with over 3 years of experience
              specializing in building exceptional digital experiences. I focus on
              creating clean, efficient, and user-friendly applications that solve
              real-world problems.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-2xl mb-2">My Journey</h4>
            <p className="text-sm text-[#757575]">
              My passion for programming started when I was in college. Since
              then, I've worked with various technologies and frameworks,
              constantly learning and improving my skills to stay at the
              forefront of web development.
            </p>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <div className="w-40 py-4 border rounded-xl flex flex-col items-center gap-2">
              <Image src={Medal} alt="experience" />
              <p className="text-sm">Experience</p>
              <span className="text-[10px] text-[#757575]">+3 Years Experience</span>
            </div>

            <div className="w-40 py-4 border rounded-xl flex flex-col items-center gap-2">
              <Image src={Briefcase} alt="experience" />
              <p className="text-sm">Experience</p>
              <span className="text-[10px] text-[#757575]">+3 Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
