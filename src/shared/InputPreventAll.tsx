import { stopPropagation } from "../utils/react/stopPropagation";
import { preventDefault } from "../utils/react/preventDefault";
import React from "react";
import { getValue } from "../FunctionalExample";

interface InputParams {
  onChange: (value: string) => void;
  value: string;
}
function InputPreventAll({ value, onChange }: InputParams) {
  return (
    <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />
  );
}
