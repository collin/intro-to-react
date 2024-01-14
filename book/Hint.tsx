import { FC, PropsWithChildren } from "react";

export const Hint: FC<PropsWithChildren & { title: string }> = (props) => {
  return (
    <div
      style={{
        padding: ".5rem",
        marginBlock: ".5rem",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "center",
        borderLeft: "20px solid #bee0b1",
        background: "#f5f5f5",
      }}
    >
      <details>
        <summary>⁉️ {props.title} (click for hint)</summary>
        <div>{props.children}</div>
      </details>
    </div>
  );
};
