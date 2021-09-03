import { stopPropagation } from "../utils/react/stopPropagation";
import { preventDefault } from "../utils/react/preventDefault";
import React from "react";

function NotStandardLink(props: any) {
  return (
    <a onClick={preventDefault(stopPropagation(props.onClick()))}>Hello</a>
  );
}
