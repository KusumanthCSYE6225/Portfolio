import ProjectCard from "@/components/project-card"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Data Pipeline Automation",
      description: "ETL Pipelines, Apache Airflow, AWS",
      imageUrl: "/images/data-pipeline.png",
      link: "#",
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Machine Learning, Data Visualization, Python",
      imageUrl: "/images/analytics-dashboard.png",
      link: "#",
    },
    {
      title: "Real-time Data Processing",
      description: "Apache Kafka, Spark Streaming, NoSQL",
      imageUrl: "/images/realtime-processing.png",
      link: "#",
    },
    {
      title: "NLP for Customer Insights",
      description: "Natural Language Processing, Sentiment Analysis",
      imageUrl: "/images/nlp-insights.png",
      link: "#",
    },
  ]

  return (
    <>
      <h2 className="text-xl font-normal mb-16 group inline-block">
        Work
        <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
      </h2>
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </div>
    </>
  )
}
