import * as React from "react";
import { Image } from "react-native";

interface LogoProps {
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ size = 150 }: LogoProps) => {
  return (
    <Image
      width={size}
      height={size}
      resizeMode="stretch"
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.5,
      }}
      source={require("../../../assets/icon.png")}
    />
  );
};

export default Logo;
