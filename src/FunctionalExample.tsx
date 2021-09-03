import { pickFromSyntheticEvent } from "./utils/react/pickFromSyntheticEvent";
import { withKey } from "./utils/react/withKey";
import React from "react";

// карирование 
const add = (leftSide: number) => (rightSide: number) => leftSide + rightSide;

const addOne = add(1);
const addSix = add(6);

add(1)(1); // -> 2
addOne(5); // -> 6

window.addEventListener('resize', () => {});

function addEventListenerWithDispose(element: Window & typeof globalThis, name: string, handler: () => void) {
  element.addEventListener(name, handler);
  return () => element.removeEventListener(name, handler);
}

const dispose = addEventListenerWithDispose(window, 'resize', () => {
  console.log('resize');
  dispose();
});

/// --- ///

const withIdKey = withKey('id');
const withIndexKey = withKey();

interface IBlockProps extends Record<string, unknown> {
  title: string;
  id: string;
}

function Feed(props: { blocks: IBlockProps[] }) {
  return (
    <div>
      {props.blocks.map(withIdKey(Block))}
      {/* <Block title="123"/> */}
      {/* {React.createElement(Block, { title: "123" }, [])} */}
    </div>
  );
}

function Block(props: IBlockProps) {
  return (
    <div>{props.title}</div>
  );  
}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked');


