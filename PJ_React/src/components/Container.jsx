function Container({ title, children }) {
  return (
    <div className="container">
      <div className="title">{title}</div>
      <div className="children">{children}</div>
    </div>
  );
}

export default Container;
