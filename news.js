import Layout from '../components/Layout'

export default function News() {
  // Sample static articles; replace with API data as needed.
  const articles = [
    { id: 1, title: 'Breakthrough in Automation', summary: 'A major breakthrough in automation has been announced...', link: '#' },
    { id: 2, title: 'Robotics in Manufacturing', summary: 'New robotics technologies are transforming manufacturing...', link: '#' },
  ];

  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-4">News & Articles</h2>
      {articles.map(article => (
        <article key={article.id} className="mb-6">
          <h3 className="text-2xl font-semibold">{article.title}</h3>
          <p>{article.summary}</p>
          <a href={article.link} className="text-blue-600 underline">Read more</a>
        </article>
      ))}
    </Layout>
  )
}
