import React, { ReactNode } from "react";
import { Text } from "react-native";
import styles from "./styles";

interface HeadingProps {
  children: ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ children }): JSX.Element => {
  return <Text style={styles.heading}>{children}</Text>;
};
