import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  link: string
}

export default function ProjectCard({ title, description, imageUrl, link }: ProjectCardProps) {
  return (
    <Link href={link} className="block group">
      <div className="overflow-hidden bg-gray-100">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-4 text-xl font-normal">{title}</h3>
      <p className="mt-2 text-gray-400 text-sm">{description}</p>
    </Link>
  )
}
