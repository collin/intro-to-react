import { FC, PropsWithChildren } from "react";
import docs from "./images/docs.png";

export const ReadDocs: FC<
  PropsWithChildren & { url: string; title: string }
> = (props) => {
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
      <img
        src={docs}
        style={{
          marginRight: 10,
          alignSelf: "flex-start",
          maxWidth: 150,
          minWidth: 150,
          transform: "scaleX(-1)",
        }}
      />
      <div>
        <a href={props.url} target="_blank" style={{ fontSize: "1.5rem" }}>
          {props.title}
        </a>
        {props.children}
      </div>
    </div>
  );
};
