import Layout from '../components/Layout'

export default function Projects() {
  // Sample project data
  const projects = [
    { id: 1, name: 'AI-Powered Robot', description: 'An innovative robot powered by AI to assist in manufacturing.' },
    { id: 2, name: 'Automation Analytics', description: 'A platform for tracking automation trends and data.' },
  ];

  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-4">Project Highlights</h2>
      {projects.map(project => (
        <div key={project.id} className="mb-6 p-4 border rounded">
          <h3 className="text-2xl font-semibold">{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </Layout>
  )
}
