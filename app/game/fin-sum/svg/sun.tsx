import React from "react";
import "../theme/theme-v4.css";

interface SunSvgProps {
  color: "purple" | "green" | "red";
}

const SunSvg = (props: SunSvgProps) => {
  const { color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="256"
      height="256"
      viewBox="0 0 256 256"
    >
      <g
        // style="stroke: none; stroke-width: 0; stroke-dasharray: none; strokeLinecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
        // stroke={`var(--${color})`}
        fill={`var(--${color})`}
      >
        <path
          d="M 45 68 c -12.682 0 -23 -10.317 -23 -23 c 0 -12.682 10.318 -23 23 -23 c 12.683 0 23 10.318 23 23 C 68 57.683 57.683 68 45 68 z M 45 24 c -11.58 0 -21 9.42 -21 21 c 0 11.579 9.42 21 21 21 c 11.579 0 21 -9.421 21 -21 C 66 33.42 56.579 24 45 24 z"
          // style="stroke: none; stroke-width: 1; stroke-dasharray: none; strokeLinecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="butt"
          fill={`var(--${color})`}
          strokeDasharray="none"
          fillRule="nonzero"
          opacity="1"
        />
        <path
          d="M 38.652 17.61 c -0.292 0 -0.573 -0.127 -0.765 -0.356 c -0.239 -0.284 -0.301 -0.677 -0.161 -1.021 l 6.348 -15.61 C 44.227 0.247 44.593 0 45 0 s 0.773 0.247 0.926 0.623 l 6.349 15.61 c 0.14 0.344 0.077 0.737 -0.162 1.021 c -0.238 0.284 -0.616 0.414 -0.978 0.333 c -4.045 -0.881 -8.228 -0.881 -12.271 0 C 38.794 17.603 38.723 17.61 38.652 17.61 z M 45 14.923 c 1.577 0 3.162 0.124 4.732 0.369 L 45 3.654 l -4.732 11.637 C 41.837 15.046 43.423 14.923 45 14.923 z"
          // style="stroke: none; stroke-width: 1; stroke-dasharray: none; strokeLinecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
          // stroke={`var(--${color})`}
          fill={`var(--${color})`}
        />
        <path
          d="M 45 90 c -0.407 0 -0.773 -0.246 -0.926 -0.623 l -6.348 -15.61 c -0.14 -0.344 -0.078 -0.737 0.161 -1.021 c 0.239 -0.284 0.615 -0.412 0.978 -0.333 c 4.043 0.882 8.226 0.882 12.271 0 c 0.363 -0.08 0.74 0.05 0.978 0.333 c 0.239 0.283 0.302 0.677 0.162 1.021 l -6.349 15.61 C 45.773 89.754 45.407 90 45 90 z M 40.268 74.709 L 45 86.346 l 4.732 -11.638 C 46.592 75.198 43.407 75.197 40.268 74.709 z"
          // style="stroke: none; stroke-width: 1; stroke-dasharray: none; strokeLinecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
          // stroke={`var(--${color})`}
          fill={`var(--${color})`}
        />
        <path
          d="M 16.61 52.349 c -0.127 0 -0.255 -0.024 -0.377 -0.073 l -15.61 -6.349 C 0.247 45.773 0 45.407 0 45 s 0.247 -0.773 0.624 -0.926 l 15.61 -6.348 c 0.343 -0.14 0.737 -0.078 1.021 0.161 c 0.284 0.239 0.412 0.616 0.333 0.978 c -0.441 2.021 -0.665 4.086 -0.665 6.135 c 0 2.049 0.224 4.113 0.665 6.136 c 0.079 0.362 -0.049 0.739 -0.333 0.978 C 17.071 52.269 16.842 52.349 16.61 52.349 z M 3.654 45 l 11.637 4.732 c -0.245 -1.57 -0.369 -3.155 -0.369 -4.732 s 0.124 -3.163 0.369 -4.732 L 3.654 45 z"
          // style="stroke: none; stroke-width: 1; stroke-dasharray: none; strokeLinecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
          // stroke={`var(--${color})`}
          fill={`var(--${color})`}
        />
        <path
          d="M 73.39 52.349 c -0.231 0 -0.461 -0.08 -0.644 -0.235 c -0.284 -0.238 -0.412 -0.615 -0.333 -0.978 c 0.44 -2.022 0.664 -4.087 0.664 -6.136 c 0 -2.049 -0.224 -4.114 -0.664 -6.135 c -0.079 -0.362 0.049 -0.739 0.333 -0.978 c 0.283 -0.239 0.676 -0.301 1.021 -0.161 l 15.61 6.348 C 89.754 44.227 90 44.593 90 45 s -0.246 0.773 -0.623 0.926 l -15.61 6.349 C 73.645 52.324 73.517 52.349 73.39 52.349 z M 74.709 40.268 c 0.244 1.57 0.368 3.155 0.368 4.732 s -0.124 3.162 -0.369 4.732 L 86.346 45 L 74.709 40.268 z"
          // style="stroke: none; stroke-width: 1; stroke-dasharray: none; strokeLinecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
          // stroke={`var(--${color})`}
          fill={`var(--${color})`}
        />
        <path
          d="M 20.437 30.415 c -0.028 0 -0.057 -0.001 -0.085 -0.004 c -0.37 -0.032 -0.692 -0.266 -0.836 -0.607 l -6.549 -15.527 c -0.158 -0.375 -0.073 -0.808 0.214 -1.096 c 0.288 -0.288 0.722 -0.371 1.096 -0.214 l 15.527 6.549 c 0.342 0.144 0.576 0.466 0.607 0.835 c 0.032 0.37 -0.144 0.727 -0.456 0.927 c -1.743 1.119 -3.36 2.42 -4.809 3.868 c -1.448 1.449 -2.75 3.066 -3.868 4.809 C 21.093 30.243 20.775 30.415 20.437 30.415 z M 15.764 15.764 l 4.882 11.575 c 0.938 -1.284 1.971 -2.492 3.085 -3.607 l 0 0 c 1.115 -1.115 2.323 -2.148 3.607 -3.085 L 15.764 15.764 z"
          // style="stroke: none; stroke-width: 1; stroke-dasharray: none; strokeLinecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
          // stroke={`var(--${color})`}
          fill={`var(--${color})`}
        />
        <path
          d="M 76.112 77.112 c -0.131 0 -0.263 -0.025 -0.389 -0.078 l -15.526 -6.549 c -0.342 -0.145 -0.576 -0.467 -0.607 -0.836 c -0.032 -0.37 0.144 -0.727 0.456 -0.928 c 1.745 -1.121 3.363 -2.423 4.808 -3.868 l 0 0 c 1.445 -1.444 2.747 -3.063 3.868 -4.808 c 0.201 -0.312 0.553 -0.489 0.928 -0.456 c 0.369 0.031 0.691 0.266 0.836 0.607 l 6.549 15.526 c 0.157 0.375 0.073 0.809 -0.215 1.096 C 76.628 77.011 76.372 77.112 76.112 77.112 z M 62.661 69.354 l 11.574 4.882 l -4.882 -11.574 c -0.939 1.285 -1.973 2.494 -3.086 3.606 C 65.155 67.381 63.946 68.414 62.661 69.354 z"
          // style="stroke: none; stroke-width: 1; stroke-dasharray: none; strokeLinecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
          // stroke={`var(--${color})`}
          fill={`var(--${color})`}
        />
        <path
          d="M 69.563 30.414 c -0.339 0 -0.656 -0.171 -0.842 -0.459 c -1.121 -1.746 -2.423 -3.363 -3.868 -4.809 l 0 0 c -1.447 -1.447 -3.065 -2.749 -4.808 -3.868 c -0.313 -0.2 -0.488 -0.557 -0.456 -0.927 c 0.031 -0.37 0.266 -0.691 0.607 -0.835 l 15.526 -6.549 c 0.373 -0.158 0.808 -0.074 1.096 0.214 c 0.288 0.288 0.372 0.721 0.215 1.096 l -6.549 15.527 c -0.145 0.342 -0.467 0.576 -0.836 0.607 C 69.62 30.413 69.592 30.414 69.563 30.414 z M 66.268 23.732 c 1.113 1.113 2.146 2.322 3.086 3.607 l 4.882 -11.575 l -11.574 4.882 C 63.945 21.584 65.153 22.618 66.268 23.732 L 66.268 23.732 L 66.268 23.732 L 66.268 23.732 z"
          // style="stroke: none; stroke-width: 1; stroke-dasharray: none; strokeLinecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
          // stroke={`var(--${color})`}
          fill={`var(--${color})`}
        />
        <path
          d="M 13.887 77.112 c -0.26 0 -0.516 -0.102 -0.707 -0.293 c -0.288 -0.288 -0.373 -0.721 -0.214 -1.096 l 6.549 -15.526 c 0.144 -0.342 0.466 -0.576 0.835 -0.607 c 0.37 -0.043 0.727 0.144 0.927 0.456 c 1.119 1.742 2.421 3.36 3.868 4.808 l 0 0 c 1.446 1.446 3.063 2.747 4.809 3.868 c 0.312 0.201 0.488 0.558 0.456 0.928 c -0.032 0.369 -0.266 0.691 -0.607 0.836 l -15.527 6.549 C 14.15 77.087 14.019 77.112 13.887 77.112 z M 20.646 62.661 l -4.882 11.574 l 11.575 -4.882 c -1.286 -0.938 -2.494 -1.973 -3.607 -3.086 l 0 0 l 0 0 C 22.618 65.153 21.584 63.945 20.646 62.661 z"
          // style="stroke: none; stroke-width: 1; stroke-dasharray: none; strokeLinecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
          // stroke={`var(--${color})`}
          fill={`var(--${color})`}
        />
      </g>
    </svg>
  );
};

export default SunSvg;
