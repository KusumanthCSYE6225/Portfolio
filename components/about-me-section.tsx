import Link from "next/link"
import { ExternalLink, Download } from "lucide-react"

export default function AboutMeSection() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-normal mb-8 group inline-block">
        About
        <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
      </h2>

      <div className="max-w-3xl mx-auto space-y-8 text-center">
        <p className="text-xl">
          Hello, I'm Kusumanth Reddy Gali, a data engineer and machine learning enthusiast with a passion for turning
          complex data into actionable insights.
        </p>

        <p className="text-xl">
          I'm currently a Data Science Engineer Co-op at{" "}
          <Link
            href="https://qmbdevices.com"
            target="_blank"
            className="text-indigo-300 hover:underline inline-flex items-center"
          >
            QMB Devices <ExternalLink size={14} className="ml-1" />
          </Link>
          , where I develop robust data pipelines and create AI-powered solutions that drive innovation. I'm pursuing a
          Master of Science in Information Systems at{" "}
          <Link
            href="https://www.northeastern.edu"
            target="_blank"
            className="text-indigo-300 hover:underline inline-flex items-center"
          >
            Northeastern University <ExternalLink size={14} className="ml-1" />
          </Link>{" "}
          after completing my Bachelor of Technology in Computer Science Engineering at Bennett University, India.
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

        <div className="pt-8 flex justify-center">
          <a
            href="/Resume.pdf"
            download
            className="inline-flex items-center justify-center px-6 py-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
          >
            <Download size={18} className="mr-2" /> Download Resume
          </a>
        </div>
      </div>
    </div>
  )
}
