import React from "react";
import "../theme/theme-fin-sum.css";

interface MoonSvgProps {
  color: string;
  // color: "purple" | "green" | "red";
}

const MoonSvg = (props: MoonSvgProps) => {
  const { color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100%"
      height="100%"
      viewBox="-4 -4 98 98"
    >
      <defs></defs>
      <g
      // style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
      >
        <path
          d="M 79.567 76.348 c -18.202 18.202 -47.713 18.202 -65.915 0 c -18.202 -18.202 -18.202 -47.713 0 -65.916 C 18.34 5.744 23.782 2.273 29.585 0 c -6.552 16.725 -3.081 36.469 10.433 49.982 S 73.275 66.967 90 60.415 C 87.727 66.218 84.256 71.66 79.567 76.348 z"
          // style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
          fill={`var(--${color})`}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default MoonSvg;
