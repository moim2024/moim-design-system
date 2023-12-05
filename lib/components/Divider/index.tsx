import { colors } from "../Color";

interface DividerProps {
  height: number;
}

function Divider(props: DividerProps) {
  return (
    <div
      style={{
        width: "100%",
        height: `${props.height}px`,
        backgroundColor: colors.gray300,
      }}
    />
  );
}

export default Divider;
