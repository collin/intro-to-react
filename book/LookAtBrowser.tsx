import { FC, PropsWithChildren } from "react";
import look from "./images/look.png";

export const LookAtBrowser: FC<PropsWithChildren> = (props) => {
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
        src={look}
        style={{
          marginRight: 10,
          alignSelf: "flex-start",
          maxWidth: 150,
          minWidth: 150,
          transform: "scaleX(-1)",
        }}
      />
      <div>{props.children}</div>
    </div>
  );
};
