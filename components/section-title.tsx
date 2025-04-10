interface SectionTitleProps {
  id: string
  title: string
}

export default function SectionTitle({ id, title }: SectionTitleProps) {
  return (
    <div id={id} className="mb-8 md:mb-12">
      <h2 className="group inline-block text-2xl font-bold tracking-tight md:text-3xl">
        {title}
        <span className="block h-0.5 max-w-0 bg-foreground transition-all duration-500 group-hover:max-w-full"></span>
      </h2>
    </div>
  )
}
