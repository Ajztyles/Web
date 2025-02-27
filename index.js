import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-4">Welcome to Automation Insights</h2>
      <p className="mb-8">
        Stay updated with the latest in automation news and global projects.
      </p>
      <section>
        <h3 className="text-2xl font-semibold mb-2">Featured News</h3>
        {/* Dynamic news items can be loaded here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded">News Item 1</div>
          <div className="p-4 border rounded">News Item 2</div>
        </div>
      </section>
    </Layout>
  )
}
