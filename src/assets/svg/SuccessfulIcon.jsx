import React from 'react'

const SuccessfulIcon = () => {
  return (
    <svg
      width="139"
      height="139"
      viewBox="0 0 139 139"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="69.5" cy="69.5" r="69.5" fill="white" />
      <rect x="18" y="17" width="103" height="103" rx="51.5" fill="#4FAF5A" />
      <g filter="url(#filter0_d_247_4919)">
        <path
          d="M55.7666 68.5L65.7545 78.8L86.0945 58.2"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_247_4919"
          x="41.4333"
          y="55.2"
          width="58.9945"
          height="49.2667"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="11.3333" />
          <feGaussianBlur stdDeviation="5.66667" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_247_4919"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_247_4919"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SuccessfulIcon