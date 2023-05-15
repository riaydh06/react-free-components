import styled from "styled-components";
import { ColorsType, ShadesType } from "../theme/types";

interface WrapperProps {
  size: number;
  color: ColorsType;
  shade: ShadesType;
  weight: string;
  lineHeight?: number;
}

export const Wrapper = styled.span<WrapperProps>`
  font-size: ${(props) => `${props.size}px`};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.theme.colors[props.color][props.shade]};
  ${(props) => props.lineHeight && `line-height: ${props.lineHeight}px`}
`;
