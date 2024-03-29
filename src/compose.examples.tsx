import React from 'react';
import { getValue } from './FunctionalExample';
import { preventDefault } from './utils/react/preventDefault';
import { stopPropagation } from './utils/react/stopPropagation';

function InputExample({ value, onChange }: any) {
  return (
    <input
      value={value}
      // onChange={preventDefault(stopPropagation(getValue(onChange)))}
      // onChange={compose(onChange, getValue, stopPropagation, preventDefault)}
      onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}
    />
  );
}

function compose<U>(...fns: Function[]) {
  return <E,>(initialValue: any) =>
    fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}

function pipe<U>(...fns: Function[]) {
  return <E,>(initialValue: any): U =>
    fns.reduce((previousValue, fn) => fn(previousValue), initialValue);
}

function pick<K extends string>(prop: K) {
  return <O extends Record<K, any>>(obj: O) => obj[prop];
}

const some = pick('value')({ value: 1 }); // ->1

function isEquial<T>(left: T) {
  return <E extends T>(right: E) => left === right;
}

const comments = [
  { id: 22, text: 'text one' },
  { id: 44, text: 'text two' },
];

// => const filteredComments = comments.filter(pipe(pick('id'), isEquial(22), cond));
// const filterWithId = (id: number) => pipe(pick('id'), isEquial(22), cond);

const createFilterBy = (prop: string) => (id: number) => pipe(pick(prop), isEquial(22), cond);

const filterWithId = createFilterBy('id');
const filterWithId22 = createFilterBy('id')(22);
const filterByValue = createFilterBy('value');

const filteredCommentsOne = comments.filter(filterWithId(22));
const filteredCommentsTwo = comments.filter(filterByValue(22));


function cond(b:boolean) {
  return !b;
}

// == pickFromSyntheticEvent
const getValueNumber = pipe<number>(
  pick('currentTarget'),
  pick('value'),
  parseInt
)