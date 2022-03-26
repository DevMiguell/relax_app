export default function ContainerDB({ children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gridGap: "2rem",
      }}
    >
      {children}
    </div>
  );
}
