import { FC, PropsWithChildren } from "react";
import questions from "./images/questions.png";

export const Questions: FC<PropsWithChildren> = (props) => {
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
        src={questions}
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
