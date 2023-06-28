import { UKey } from "@/typing/utils";
import type { StandardLonghandProperties } from "csstype";
import React from "react";
import styled, { css } from "styled-components";

const FontWeight = {
  Thin: 100,
  "Extra-Light": 200,
  Light: 300,
  Regular: 400,
  Medium: 500,
  "Semi-Bold": 600,
  Bold: 700,
  "Extra-Bold": 800,
  Black: 900,
};

export interface TypoProps {
  span?: boolean;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  children: React.ReactNode;
  cursor?: "default" | "pointer";
}

export interface TypoStyleProps {
  /* required */
  size: 32 | 28 | 24 | 21 | 22 | 20 | 18 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 8;

  /* optional */
  // default 'grey900'
  color?: string;

  // default 400
  fontWeight?: UKey<typeof FontWeight>;

  // default -0.02rem
  letterSpacing?: StandardLonghandProperties["letterSpacing"];

  // default 1.4
  lineHeight?: "normal" | number;

  // default 'ellipsis'
  textOverflow?: StandardLonghandProperties["textOverflow"];

  // default
  textAlign?: StandardLonghandProperties["textAlign"];

  // default normal
  whiteSpace?: StandardLonghandProperties["whiteSpace"];

  // default normal
  wordBreak?: StandardLonghandProperties["wordBreak"];

  // deafult
  verticalAlign?: StandardLonghandProperties["verticalAlign"];

  // default 'none'
  textDecoration?: "none" | "underline" | "overline" | "line-through";
}

/* color: ${({ theme, color = "grey900" }) => theme.colors[color]}; */
/* border-bottom: ${({ borderBottom = 0 }) => borderBottom}; */
export const cssTypoStyles = css<TypoStyleProps>`
  font-size: ${({ size }) => `${size / 10}rem`};
  font-weight: ${({ fontWeight = "Regular" }) =>
    FontWeight[fontWeight as UKey<typeof FontWeight>]};

  letter-spacing: ${({ letterSpacing = "-0.02rem" }) => letterSpacing};
  line-height: ${({ lineHeight = 1.4 }) => lineHeight};

  text-align: ${({ textAlign = "" }) => textAlign};
  white-space: ${({ whiteSpace = "normal" }) => whiteSpace};
  word-break: ${({ wordBreak = "normal" }) => wordBreak};
  text-overflow: ${({ textOverflow = "ellipsis" }) => textOverflow};
  text-decoration: ${({ textDecoration = "none" }) => textDecoration};
`;

type UnionTypoProps = TypoStyleProps & TypoProps;

/**
 * 모든 number 단위는 rem 입니다
 * lineHeight / letterSpacing / paddingTop 등 모든 props는 rem 기준
 *
 * 예외) string 을 모두 받을수 있는 margin
 */
const Typo = (props: UnionTypoProps) => {
  if (props.span) return <StyledSpan {...props}>{props.children}</StyledSpan>;
  if (props.h1)
    return <StyledHeader1 {...props}>{props.children}</StyledHeader1>;
  if (props.h2)
    return <StyledHeader2 {...props}>{props.children}</StyledHeader2>;
  if (props.h3)
    return <StyledHeader3 {...props}>{props.children}</StyledHeader3>;
  if (props.h4)
    return <StyledHeader4 {...props}>{props.children}</StyledHeader4>;
  if (props.h5)
    return <StyledHeader5 {...props}>{props.children}</StyledHeader5>;
  if (props.h6)
    return <StyledHeader6 {...props}>{props.children}</StyledHeader6>;

  return <StyledP {...props}>{props.children}</StyledP>;
};

export default Typo;

const Frame = styled.div<{ size?: number }>`
  width: 100%;
  height: ${(props) => `${props.size ?? 12}px`};
`;

// const LoadingFrame = styled.div`
//   ${cssFetchingAnimation}
// `;

const StyledP = styled.p`
  ${cssTypoStyles}
`;
const StyledSpan = styled.p`
  ${cssTypoStyles}
`;
const StyledHeader1 = styled.h1`
  ${cssTypoStyles}
`;
const StyledHeader2 = styled.h2`
  ${cssTypoStyles}
`;
const StyledHeader3 = styled.h3`
  ${cssTypoStyles}
`;
const StyledHeader4 = styled.h4`
  ${cssTypoStyles}
`;
const StyledHeader5 = styled.h5`
  ${cssTypoStyles}
`;
const StyledHeader6 = styled.h6`
  ${cssTypoStyles}
`;
