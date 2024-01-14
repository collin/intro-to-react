import { FC, PropsWithChildren } from "react";
import copyPaste from "./images/copy-paste.png";

export const CopyPaste: FC<PropsWithChildren> = (props) => {
  return (
    <div
      style={{
        marginBlock: ".5rem",
        paddingInlineEnd: "5rem",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "center",
        borderLeft: "20px solid #bee0b1",
        background: "#f5f5f5",
      }}
    >
      <img
        src={copyPaste}
        style={{
          marginRight: 10,
          alignSelf: "flex-start",
          maxWidth: 150,
          minWidth: 150,
          marginTop: -10,
          marginBottom: -10,
        }}
      />
      <div>{props.children}</div>
    </div>
  );
};
