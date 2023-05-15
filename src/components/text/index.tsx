import React, { PropsWithChildren } from "react";
import { ColorsType, ShadesType } from "../theme/types";
import * as Styles from "./styles";

interface Props {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  size?: number;
  weight?: string;
  color?: ColorsType;
  shade?: ShadesType;
  lineHeight?: number;
}

const Text = ({
  as = "span",
  children = "Test text",
  size = 16,
  color = ColorsType.gray,
  shade = ShadesType.xdark,
  weight = "normal",
  lineHeight,
}: PropsWithChildren<Props>): JSX.Element => {
  return (
    <Styles.Wrapper
      as={as}
      size={size}
      color={color}
      shade={shade}
      weight={weight}
      lineHeight={lineHeight}
    >
      {children}
    </Styles.Wrapper>
  );
};

export default Text;
