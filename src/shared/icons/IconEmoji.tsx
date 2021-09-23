import React from 'react';

interface IIconProps {
  width?: string;
  height?: string;
}

export function IconEmoji(props: IIconProps) {
  const { width = '100%', height = width } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5 9.5C18.5 14.4706 14.4706 18.5 9.5 18.5C4.52944 18.5 0.5 14.4706 0.5 9.5C0.5 4.52944 4.52944 0.5 9.5 0.5C14.4706 0.5 18.5 4.52944 18.5 9.5Z"
        stroke="#CC6633"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.70001 11.4C5.70001 11.4 7.12501 13.3 9.50001 13.3C11.875 13.3 13.3 11.4 13.3 11.4"
        stroke="#CC6633"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.64999 6.64954H6.65999"
        stroke="#CC6633"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.35 6.64954H12.36"
        stroke="#CC6633"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
