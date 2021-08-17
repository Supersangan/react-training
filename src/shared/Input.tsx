import React from "react";
import { getValue } from "../FunctionalExample";

function Input({ onChange, value }: { onChange: (value: string) => void; value: string; }) {
  return (
    <input value={value} onChange={getValue(onChange)} />
  );
}
