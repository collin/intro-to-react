import { FC, PropsWithChildren } from "react";
import byHand from "./images/by-hand.png";

export const ByHand: FC<PropsWithChildren> = (props) => {
  return (
    <div
      style={{
        padding: ".5rem",
        marginBlock: ".5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        borderLeft: "20px solid #bee0b1",
        background: "#f5f5f5",
      }}
    >
      <img
        src={byHand}
        style={{
          marginRight: 10,
          alignSelf: "flex-start",
          maxWidth: 150,
          minWidth: 150,
          marginTop: -30,
          marginBottom: -30,
        }}
      />
      <div>{props.children}</div>
    </div>
  );
};
