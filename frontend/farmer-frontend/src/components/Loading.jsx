function Loading({ message = "Loading..." }) {
  return (
    <div className="farmer-loading">
      <div className="farmer-loading-spinner"></div>
      <p>{message}</p>
    </div>
  );
}

export default Loading;