import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import Loader from "../components/Loader";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/articles")
      .then(res => res.json())
      .then(data => {
        setArticles(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <section className="page-header">
        <h2>Articles Dashboard</h2>
        <p>
          View original BeyondChats articles alongside their AI-enhanced
          versions and reference sources.
        </p>
      </section>

      <div className="container">
        {articles.map(article => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </>
  );
}
