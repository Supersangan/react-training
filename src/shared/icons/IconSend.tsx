import React from 'react';

interface IIconProps {
  width?: string;
  height?: string;
}

export function IconSend(props: IIconProps) {
  const { width = '100%', height = width } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.50001 0.560486L8.68001 4.93888L7.87405 5.70078L4.50001 2.1666L1.12597 5.70078L0.320007 4.93888L4.50001 0.560486ZM1.09064 4.919L1.10643 4.93392L4.50001 1.37927L7.89359 4.93392L7.90937 4.919L4.50001 1.34782L1.09064 4.919Z"
        fill="white"
      />
      <rect
        x="5.04218"
        y="2.04486"
        width="7.6356"
        height="1.0842"
        transform="rotate(90 5.04218 2.04486)"
        fill="white"
      />
    </svg>
  );
}
