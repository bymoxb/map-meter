import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Colors } from "../styles";

const Crosshair = (props: SvgProps) => {
  return (
    <Svg
      //xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 140"
      width={100}
      height={100}
      //style={{ borderWidth: 1 }}
      {...props}
    >
      <Path
        d="M136.18 71.3H5.25M70.717 5.833v130.93m32.2-65.466c0 17.784-14.417 32.2-32.2 32.2-17.784 0-32.2-14.417-32.2-32.2 0-17.784 14.417-32.2 32.2-32.2 17.784 0 32.2 14.417 32.2 32.2z"
        stroke={Colors.RED[500]}
        fill="none"
        strokeWidth={2.5}
      />
    </Svg>
  );
};

export default Crosshair;
