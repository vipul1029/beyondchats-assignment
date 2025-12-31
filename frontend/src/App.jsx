import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/articles")
      .then(res => res.json())
      .then(data => {
        setArticles(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ padding: 20, fontSize: 18 }}>
        Loading articles...
      </div>
    );
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>BeyondChats Article Dashboard</h1>

      {articles.map(article => (
        <div
          key={article._id}
          style={{
            marginTop: 20,
            padding: 16,
            borderRadius: 6,
            border: "1px solid #e5e7eb",
            background: "#fff"
          }}
        >
          <h2>{article.title}</h2>

          <span
            style={{
              display: "inline-block",
              marginBottom: 10,
              padding: "4px 10px",
              borderRadius: 12,
              fontSize: 12,
              background: article.isUpdated ? "#d1fae5" : "#fde68a"
            }}
          >
            {article.isUpdated ? "Updated" : "Original"}
          </span>

          {article.updatedContent ? (
            <pre
              style={{
                whiteSpace: "pre-wrap",
                background: "#f9fafb",
                padding: 12,
                borderRadius: 4,
                marginTop: 10
              }}
            >
              {article.updatedContent}
            </pre>
          ) : (
            <p style={{ color: "#6b7280" }}>
              No updated content available.
            </p>
          )}

          {article.references?.length > 0 && (
            <>
              <h4>References</h4>
              <ul>
                {article.references.map((ref, i) => (
                  <li key={i}>
                    <a href={ref} target="_blank" rel="noreferrer">
                      {ref}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
