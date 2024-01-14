import { FC, PropsWithChildren } from "react";
import goal from "./images/goal.png";

export const Goal: FC<PropsWithChildren> = (props) => {
  return (
    <div
      style={{
        padding: ".5rem",
        marginBlock: ".5rem",
        display: "flex",
        fontSize: "1.5rem",
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "center",
        borderLeft: "20px solid #ffbf3f",
        background: "#f5f5f5",
      }}
    >
      <img
        src={goal}
        style={{
          marginRight: 10,

          alignSelf: "flex-start",
          maxWidth: 70,
          minWidth: 70,
        }}
      />
      <div>{props.children}</div>
    </div>
  );
};
