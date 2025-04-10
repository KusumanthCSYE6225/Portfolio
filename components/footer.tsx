import Link from "next/link"
import { Mail, Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 mt-16 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <Link
            href="mailto:contact@example.com"
            className="flex items-center gap-2 hover:text-indigo-300 transition-colors"
          >
            <Mail size={20} />
            <span>Email</span>
          </Link>

          <Link
            href="https://github.com/kusumanth7329"
            target="_blank"
            className="flex items-center gap-2 hover:text-indigo-300 transition-colors"
          >
            <Github size={20} />
            <span>GitHub</span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/kusumanth-gali-41736617a/"
            target="_blank"
            className="flex items-center gap-2 hover:text-indigo-300 transition-colors"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
