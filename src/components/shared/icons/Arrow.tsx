import React from "react";

interface ArrowIconType {
  width?: string | number;
  height?: string | number;
  className?: string;
}
const Arrow: React.FC<ArrowIconType> = ({
  width = "20",
  height = "20",
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 565 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.0805664 499L54 560L485 133.965V560H565V0H1.28052L0.0805664 80H430.36L0.0805664 499Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Arrow;
