function PostCard({ title, body }) {
  return (
    <div className="post-card">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default PostCard;