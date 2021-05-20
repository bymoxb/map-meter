import React from "react";
import Fab from "./Fab";

interface LayersFabProps {
  onPress: () => void;
}

const LayersFab: React.FC<LayersFabProps> = ({ onPress }: LayersFabProps) => {
  return <Fab iconName="map-plus" onPress={onPress} />;
};

export default LayersFab;
