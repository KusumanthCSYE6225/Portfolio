import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="mt-32 mb-16">
      <p className="text-2xl font-normal max-w-3xl mb-12">
        Hello, I'm Kusumanth Gali, a designer and creative coder with a passion for design and technology.
      </p>

      <div className="flex gap-6">
        <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
          <Link href="/work">View My Work</Link>
        </Button>
        <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
          <Link href="/information">About Me</Link>
        </Button>
      </div>
    </section>
  )
}
