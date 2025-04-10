import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function InformationSection() {
  return (
    <>
      <h2 className="text-xl font-normal mb-8 group inline-block">
        Information
        <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
      </h2>

      <div className="max-w-3xl space-y-8">
        <p className="text-xl">
          Hello, I'm Kusumanth Reddy Gali, a data engineer and machine learning enthusiast with a passion for turning
          complex data into actionable insights.
        </p>

        <p className="text-xl">
          I'm currently a Data Science Engineer Co-op at QMB Devices, where I develop robust data pipelines and create
          AI-powered solutions that drive innovation. I'm pursuing a Master of Science in Information Systems at
          Northeastern University (expected May 2025) after completing my Bachelor of Technology in Computer Science
          Engineering at Bennett University, India.
        </p>

        <p className="text-xl">
          My work spans building scalable systems—from designing hundreds of data pipelines to deploying advanced
          machine learning models that empower businesses with critical insights. I'm fascinated by the intersection of
          data engineering and intelligent analytics, and I thrive on crafting solutions that simplify complexity and
          unlock hidden potential.
        </p>

        <p className="text-xl">
          I believe that with the right blend of technology and creativity, we can transform data into powerful stories
          and smarter decision-making.
        </p>

        <div className="flex flex-wrap gap-8 pt-8">
          <Link href="mailto:contact@example.com" className="text-xl underline">
            Email
          </Link>
          <Link href="https://github.com/kusumanth7329" target="_blank" className="text-xl flex items-center gap-2">
            <Github size={20} />
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/kusumanth-gali-41736617a/"
            target="_blank"
            className="text-xl flex items-center gap-2"
          >
            <Linkedin size={20} />
            LinkedIn
          </Link>
        </div>
      </div>
    </>
  )
}
