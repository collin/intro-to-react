export const Activity = (props) => {
  return (
    <div
      style={{
        marginBlock: "1rem",
        border: "5px solid #e0e0e0",
      }}
    >
      <div
        style={{
          padding: ".5rem",
          display: "flex",
          fontSize: "1.1rem",
          justifyContent: "flex-start",
          alignItems: "center",
          alignContent: "center",
          // borderLeft: "20px solid #ffbf3f",
          background: "#e0e0e0",
        }}
      >
        🧠 think, and ⌨️ code
      </div>
      <div style={{ paddingInline: ".5rem" }}>{props.children}</div>
    </div>
  );
};
