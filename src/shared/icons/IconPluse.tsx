import React from 'react';

interface IIconProps {
  width?: string;
  height?: string;
}

export function IconPluse(props: IIconProps) {
  const { width = '100%', height = width } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 7 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.1523 2.8066H7V3.96226H4.1523V7H2.8477V3.96226H0V2.8066H2.8477V0H4.1523V2.8066Z"
        fill="white"
      />
    </svg>
  );
}
