import React from 'react';

interface IconProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

const FacebookIcon: React.FC<IconProps> = ({
  width = '25',
  height = '25',
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FacebookIcon;
