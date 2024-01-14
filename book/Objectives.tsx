import { FC, PropsWithChildren } from "react";
import map from "./images/map.png";

export const Objectives: FC<PropsWithChildren> = (props) => {
  return (
    <div
      style={{
        padding: ".5rem",
        marginBlock: ".5rem",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "center",
        borderLeft: "20px solid #f7ccff",
        background: "#f5f5f5",
      }}
    >
      <img
        src={map}
        style={{
          marginRight: 10,
          alignSelf: "flex-start",
          maxWidth: 150,
          minWidth: 150,
        }}
      />
      <div>{props.children}</div>
    </div>
  );
};
