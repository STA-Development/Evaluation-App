import React from "react";

const MinusIcon = () => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1444_14371)">
        <rect x="8" y="4" width="18" height="18" rx="4" fill="white"/>
        <rect
          x="9"
          y="5"
          width="16"
          height="16"
          rx="3"
          stroke="#979797"
          strokeWidth="2"
        />
      </g>
      <path
        d="M20.6666 13H13.3333C13.1492 13 13 13.1492 13 13.3333C13 13.5174 13.1492 13.6667 13.3333 13.6667H20.6667C20.8508 13.6667 21 13.5174 21 13.3333C21 13.1492 20.8507 13 20.6666 13Z"
        fill="#333333"
      />
      <defs>
        <filter
          id="filter0_d_1444_14371"
          x="0"
          y="0"
          width="34"
          height="34"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="4"/>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.172549 0 0 0 0 0.152941 0 0 0 0 0.219608 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1444_14371"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1444_14371"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default MinusIcon;
