import { useState, useEffect } from "react";
import PostCard from "./PostCard.jsx";
import { getPosts } from "./Services.js";

function Exercise() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message || "Gagal mengambil data.");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <main className="posts-page">
      <h1>Post Cards</h1>

      {loading && <p className="status">Loading posts...</p>}
      {error && <p className="status error">{error}</p>}

      {!loading && !error && (
        <div className="posts-grid">
          
        {posts.slice(0, 9).map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
          />
        ))}

        </div>
      )}
    </main>
  );
}

export default Exercise;
